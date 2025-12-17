
import { Html, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Kitchen2 from "../worksFiles/Kitchen2";
import { Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Loader } from "@react-three/drei";

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

    // Получаем направление взгляда камеры
    const direction = new THREE.Vector3(0, 0, -1);
    direction.applyQuaternion(camera.quaternion);

    // Вычисляем позицию
    const position = camera.position
      .clone()
      .add(direction.multiplyScalar(distance))
      .add(new THREE.Vector3(offsetX, offsetY, 0));

    ref.current.position.copy(position);

    // Billboarding - всегда смотреть на камеру
    if (billboard) {
      ref.current.lookAt(camera.position);
    }

    // Обновление прозрачности в зависимости от расстояния
    if (fadeDistance > 0) {
      const camDistance = camera.position.distanceTo(ref.current.position);
      const newOpacity = Math.max(
        0,
        1 - (camDistance - distance) / fadeDistance
      );
      setOpacity(newOpacity);
    }

    // Колбэк при обновлении позиции
    if (onPositionUpdate) {
      onPositionUpdate(position);
    }
  });

  // Автоматический размер в зависимости от расстояния до камеры
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
export default function Rules({ title, content, icon = "ℹ️", distance = 5, ...props }) {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 120,
        }}
        shadows
      >
        <Loader />
        <Environment
          preset="dawn" // или "city", "sunset", "dawn", "night"
          background={true} // если true - будет как фон
        />
        <CameraButtons />
        <Center>
          <Kitchen2 />
          <FloatingText distance={distance} {...props}>
            
          </FloatingText>
        </Center>
      </Canvas>
    </div>
  );
}

function CameraButtons() {
  const [activeView, setActiveView] = useState("default");

  // Получаем камеру и элементы управления через useThree
  const { camera, gl } = require("@react-three/fiber").useThree();

  const moveCamera = (newPosition, newTarget = new THREE.Vector3(0, 0, 0)) => {
    const startPosition = new THREE.Vector3().copy(camera.position);
    const startTarget = new THREE.Vector3()
      .copy(camera.position)
      .add(camera.getWorldDirection(new THREE.Vector3()));
    const endPosition = new THREE.Vector3(...newPosition);

    const duration = 1000; // 1 секунда
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Плавная интерполяция
      const easeProgress = easeInOutCubic(progress);

      // Интерполируем позицию
      camera.position.lerpVectors(startPosition, endPosition, easeProgress);

      // Интерполируем взгляд (lookAt)
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
  const buttons = [
    {
      id: 1,
      label: "Вперед",
      onClick: () => cameraPresets.front(),
      active: activeView === "front",
    },
    {
      id: 2,
      label: "Назад",
      onClick: () => cameraPresets.back(),
      active: activeView === "back",
    },
    {
      id: 3,
      label: "Налево",
      onClick: () => cameraPresets.left(),
      active: activeView === "left",
    },
    {
      id: 4,
      label: "Направо",
      onClick: () => cameraPresets.right(),
      active: activeView === "right",
    },
    {
      id: 5,
      label: "Вниз",
      onClick: () => cameraPresets.top(),
      active: activeView === "top",
    },

    {
      id: 6,
      label: "Вверх",
      onClick: () => cameraPresets.bottom(),
      active: activeView === "bottom",
    },
    {
      id: 7,
      label: "Диагональ",
      onClick: () => cameraPresets.diagonal(),
      active: activeView === "diagonal",
    },
    {
      id: 8,
      label: "Назад",
      onClick: () => cameraPresets.close(),
      active: activeView === "close",
    },
    {
      id: 9,
      label: "Отдалить",
      onClick: () => cameraPresets.far(),
      active: activeView === "far",
    },
  ];

  return (
    <Html fullscreen>
      <div className="w-28 h-96 rounded-lg overflow-hidden">
        <div className="h-full overflow-y-auto p-2 flex flex-col gap-2">
          {buttons.map((button) => (
            <button
              key={button.id}
              className="w-full px-4 py-3  border border-gray-200 rounded-md 
                       hover:bg-blue-50 hover:border-blue-300 hover:shadow-sm 
                       active:bg-blue-100 active:scale-95 
                       transition-all duration-200 ease-in-out
                       text-gray-700 font-medium text-left
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </Html>
  );
}

