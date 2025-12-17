
import {
  Html,
  OrbitControls,
  Center,
  Environment,
  Loader,
} from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Kitchen2 from "../worksFiles/Kitchen2";
import { useEffect } from "react";

// FloatingText остается без изменений
function FloatingText({
  distance = 5,
  offsetX = 0,
  offsetY = 0,
  followCamera = true,
  billboard = true,
  visible = true,
  fadeDistance = 0,
  children,
  onPositionUpdate,
  ...htmlProps
}) {
  const ref = useRef();
  const htmlRef = useRef();
  const { camera, size } = useThree();
  const [opacity, setOpacity] = useState(1);

  useFrame(() => {
    if (!ref.current || !visible) return;

    const direction = new THREE.Vector3(0, 0, -1);
    direction.applyQuaternion(camera.quaternion);

    const position = camera.position
      .clone()
      .add(direction.multiplyScalar(distance))
      .add(new THREE.Vector3(offsetX, offsetY, 0));

    ref.current.position.copy(position);

    if (billboard) {
      ref.current.lookAt(camera.position);
    }

    if (fadeDistance > 0) {
      const camDistance = camera.position.distanceTo(ref.current.position);
      const newOpacity = Math.max(
        0,
        1 - (camDistance - distance) / fadeDistance
      );
      setOpacity(newOpacity);
    }

    if (onPositionUpdate) {
      onPositionUpdate(position);
    }
  });

  useEffect(() => {
    if (!htmlRef.current) return;

    const updateSize = () => {
      const camDistance = camera.position.distanceTo(
        ref.current?.position || new THREE.Vector3()
      );
      const scale = Math.max(0.3, Math.min(2, 5 / camDistance));

      if (htmlRef.current) {
        htmlRef.current.style.transform = `scale(${scale})`;
      }
    };

    updateSize();
  }, [camera, size]);

  if (!visible) return null;

  return (
    <group ref={ref}>
      <Html
        ref={htmlRef}
        center
        style={{
          pointerEvents: "none",
          opacity: opacity,
          transition: "opacity 0.3s ease",
          transformOrigin: "center center",
         
        }}
        {...htmlProps}
      >
        {children}
      </Html>
    </group>
  );
}

// ВЫНЕСИТЕ CameraButtonsControls ВНЕ Canvas
function CameraButtonsControls() {
  const [activeView, setActiveView] = useState("default");
  const { camera } = useThree();

  const moveCamera = (newPosition, newTarget = new THREE.Vector3(0, 0, 0)) => {
    const startPosition = new THREE.Vector3().copy(camera.position);
    const startTarget = new THREE.Vector3()
      .copy(camera.position)
      .add(camera.getWorldDirection(new THREE.Vector3()));
    const endPosition = new THREE.Vector3(...newPosition);

    const duration = 1000;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      camera.position.lerpVectors(startPosition, endPosition, easeProgress);

      const currentTarget = new THREE.Vector3().lerpVectors(
        startTarget,
        newTarget,
        easeProgress
      );
      camera.lookAt(currentTarget);

      camera.updateMatrixWorld();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const cameraPresets = {
    front: () => {
      setActiveView("front");
      moveCamera([0, 0, 8]);
    },
    back: () => {
      setActiveView("back");
      moveCamera([0, 0, -8]);
    },
    left: () => {
      setActiveView("left");
      moveCamera([-8, 0, 0]);
    },
    right: () => {
      setActiveView("right");
      moveCamera([8, 0, 0]);
    },
    top: () => {
      setActiveView("top");
      moveCamera([10, 8, -6]);
    },
    bottom: () => {
      setActiveView("bottom");
      moveCamera([0, -8, 0]);
    },
    diagonal: () => {
      setActiveView("diagonal");
      moveCamera([5, 5, 5]);
    },
    close: () => {
      setActiveView("close");
      moveCamera([2, 1, 3]);
    },
    far: () => {
      setActiveView("far");
      moveCamera([55, 5, 65]);
    },
  };

  return (
    // Html должен быть ЕДИНСТВЕННЫМ HTML элементом внутри Canvas
    <Html fullscreen>
      <div className="fixed z-50">
        <div className="w-28 h-96 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg">
          <div className="h-full overflow-y-auto p-2 flex flex-col gap-2">
            {[
              { id: 1, label: "Вперед", preset: "front" },
              { id: 2, label: "Назад", preset: "back" },
              { id: 3, label: "Налево", preset: "left" },
              { id: 4, label: "Направо", preset: "right" },
              { id: 5, label: "Вниз", preset: "top" },
              { id: 6, label: "Вверх", preset: "bottom" },
              { id: 7, label: "Диагональ", preset: "diagonal" },
              { id: 8, label: "Назад", preset: "close" },
              { id: 9, label: "Отдалить", preset: "far" },
            ].map((button) => (
              <button
                key={button.id}
                className={`w-full px-4 py-3 border rounded-md transition-all duration-200 ease-in-out text-gray-700 font-medium text-left focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  activeView === button.preset
                    ? "bg-blue-100 border-blue-400"
                    : "border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                }`}
                onClick={() => cameraPresets[button.preset]()}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Html>
  );
}

// ОТДЕЛЬНЫЙ компонент для UI кнопок (рендерится ВНЕ Canvas)
// function CameraButtons({ onViewChange }) {
//   const [activeView, setActiveView] = useState("default");

//   const buttons = [
//     { id: 1, label: "Вперед", preset: "front" },
//     { id: 2, label: "Назад", preset: "back" },
//     { id: 3, label: "Налево", preset: "left" },
//     { id: 4, label: "Направо", preset: "right" },
//     { id: 5, label: "Вниз", preset: "top" },
//     { id: 6, label: "Вверх", preset: "bottom" },
//     { id: 7, label: "Диагональ", preset: "diagonal" },
//     { id: 8, label: "Назад", preset: "close" },
//     { id: 9, label: "Отдалить", preset: "far" },
//   ];

//   const handleClick = (preset) => {
//     setActiveView(preset);
//     if (onViewChange) onViewChange(preset);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       <div className="w-28 h-96 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg">
//         <div className="h-full overflow-y-auto p-2 flex flex-col gap-2">
//           {buttons.map((button) => (
//             <button
//               key={button.id}
//               className={`w-full px-4 py-3 border rounded-md transition-all duration-200 ease-in-out text-gray-700 font-medium text-left focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 activeView === button.preset
//                   ? "bg-blue-100 border-blue-400"
//                   : "border-gray-200 hover:bg-blue-50 hover:border-blue-300"
//               }`}
//               onClick={() => handleClick(button.preset)}
//             >
//               {button.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// Основной компонент Rules
export default function Rules({
  title,
  content,
  icon = "ℹ️",
  distance = 5,
  ...props
}) {
  const [activeView, setActiveView] = useState("default");

  const handleViewChange = (view) => {
    setActiveView(view);
    // Здесь можно добавить логику для обновления камеры
    // через ref или контекст
  };

  return (
    <div style={{ width: "100%", height: "400px", position: "relative" }}>
      {/* Canvas только для 3D */}
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 120,
        }}
        shadows
      >
        <Loader />
        <Environment preset="dawn" background={true} />

        {/* 3D элементы внутри Canvas */}
        <Center>
          <Kitchen2 />
          <FloatingText distance={distance} {...props}>
            {/* Текст внутри FloatingText */}
          </FloatingText>
        </Center>

        {/* UI элементы ВНУТРИ Canvas должны быть в Html */}
        <CameraButtonsControls />
      </Canvas>

      {/* HTML элементы ВНЕ Canvas (альтернативный подход) */}
      {/* <CameraButtons onViewChange={handleViewChange} /> */}
    </div>
  );
}