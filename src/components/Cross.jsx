import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();

  // 1. Игнорируем ВСЕ ошибки загрузки текстур GLTF
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      // Игнорируем ошибки с occlusionRougnessMetalness.jpg и normal.jpg
      const errorMessage = args[0]?.toString() || "";
      if (
        errorMessage.includes("occlusionRougnessMetalness.jpg") ||
        errorMessage.includes("normal.jpg") ||
        errorMessage.includes("THREE.GLTFLoader: Couldn't load texture")
      ) {
        console.warn("Игнорируем ошибку загрузки текстуры:", errorMessage);
        return;
      }
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  // 2. Альтернативный подход: перехват глобальных ошибок
  useEffect(() => {
    const handleGlobalError = (event) => {
      if (
        event.message &&
        (event.message.includes("occlusionRougnessMetalness.jpg") ||
          event.message.includes("normal.jpg"))
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener("error", handleGlobalError);
    return () => window.removeEventListener("error", handleGlobalError);
  }, []);

  const { nodes, materials } = useGLTF("/shoe.gltf");

  // 3. Очищаем проблемные текстуры из материалов
  useEffect(() => {
    if (materials) {
      Object.entries(materials).forEach(([name, material]) => {
        if (material) {
          // Удаляем все проблемные текстуры
          const textureTypes = [
            "map",
            "aoMap",
            "normalMap",
            "roughnessMap",
            "metalnessMap",
          ];
          textureTypes.forEach((textureType) => {
            if (material[textureType]) {
              // Проверяем, есть ли в пути проблемные названия
              const texture = material[textureType];
              const imageSrc = texture.image?.src || "";
              if (
                imageSrc.includes("occlusionRougnessMetalness") ||
                imageSrc.includes("normal.jpg")
              ) {
                material[textureType] = null;
                console.log(
                  `Удалили текстуру ${textureType} из материала ${name}`
                );
              }
            }
          });
          material.needsUpdate = true;
        }
      });
    }
  }, [materials]);

  return (
    <group ref={group} {...props} dispose={null} scale={2.5}>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.setStripes}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColors.patch}
      />
    </group>
  );
}

const Cross = () => {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [soul, setSoul] = useState("#ffffff");
  const [patch, setPatch] = useState("#ffffff");
  const [isOpen, setIsOpen] = useState(false);

  // Глобальное игнорирование ошибок для всего приложения
  useEffect(() => {
    // Сохраняем оригинальные методы
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    // Настраиваем фильтр ошибок
    console.error = (...args) => {
      const errorStr = args
        .map((arg) =>
          typeof arg === "string" ? arg : arg?.message || JSON.stringify(arg)
        )
        .join(" ");

      // Игнорируем ошибки GLTF текстур
      if (
        errorStr.includes("occlusionRougnessMetalness") ||
        errorStr.includes("normal.jpg") ||
        (errorStr.includes("GLTFLoader") &&
          errorStr.includes("Couldn't load texture"))
      ) {
        // Можно логировать для отладки
        originalConsoleWarn("[Игнорировано]", ...args);
        return;
      }
      originalConsoleError.apply(console, args);
    };

    return () => {
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
    };
  }, []);

  return (
    <div>
      <div>
        <div className="text-black bg-amber-50 rounded-3xl mt-2">
          <div className="h-phone">
            <Canvas>
              <directionalLight
                position={[3, 0, 3]}
                intensity={5}
                castShadow
                shadow-mapSize={[1024, 1024]}
              />
              <directionalLight
                position={[-5, 0, -5]}
                intensity={2}
                castShadow
                shadow-mapSize={[1024, 1024]}
              />

              <Model
                castShadow
                customColors={{
                  mesh: mesh,
                  stripes: stripes,
                  soul: soul,
                  patch: patch,
                }}
              />
              <OrbitControls
                autoRotate
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false}
                enablePan={false}
              />
            </Canvas>
          </div>
          <h6 className="font-bold flex margin-auto py-1 justify-center">
            Выбери цвет
          </h6>
          <div className="text-black grid grid-cols-3 gap-1 p-2">
            <button
              className="text-white bg-green-700 focus:ring-3 font-medium rounded-lg text-sm py-2.5 me-2 mb-2"
              type="button"
              onClick={() => setMesh("PaleGreen")}
            >
              I
            </button>
            <button
              className="focus:outline-none text-white border-black bg-red-700 focus:ring-3 font-medium rounded-lg text-sm py-2.5 me-2 mb-2"
              type="button"
              onClick={() => setMesh("IndianRed")}
            >
              I I
            </button>
            <button
              className="focus:outline-none text-black focus:ring-3 font-medium rounded-lg text-sm py-2.5 me-2 mb-2 bg-[#7FFFD4]"
              type="button"
              onClick={() => setMesh("Aquamarine")}
            >
              III
            </button>
          </div>
          <div className="text-black grid grid-cols-3 gap-1 p-2">
            <button
              className="focus:outline-none focus:ring-3 text-black bg-[#FFE4B5] font-medium rounded-lg text-sm"
              type="button"
              onClick={() => setStripes("Moccasin")}
            >
              1
            </button>
            <button
              className="focus:outline-none focus:ring-3 text-black bg-[#ADFF2F] font-medium rounded-lg text-sm"
              type="button"
              onClick={() => setStripes("GreenYellow")}
            >
              2
            </button>
            <button
              className="focus:outline-none focus:ring-3 text-black bg-[#00BFFF] font-medium rounded-lg text-sm"
              type="button"
              onClick={() => setStripes("DeepSkyBlue")}
            >
              3
            </button>
            <button
              className="focus:outline-none focus:ring-3 text-white bg-[#0000CD] font-medium rounded-lg text-sm"
              type="button"
              onClick={() => setPatch("MediumBlue")}
            >
              1
            </button>
            <button
              className="focus:outline-none focus:ring-3 text-black bg-[#F5FFFA] font-medium rounded-lg text-sm"
              type="button"
              onClick={() => setPatch("MintCream")}
            >
              2
            </button>
            <button
              className="focus:outline-none focus:ring-3 text-black bg-[#FFA500] font-medium rounded-lg text-sm"
              type="button"
              onClick={() => setPatch("Orange")}
            >
              3
            </button>
            <button
              className="focus:outline-none focus:ring-3 text-black bg-[#ffffff] font-medium rounded-lg text-sm"
              type="button"
              onClick={() => setSoul("White")}
            >
              1
            </button>
            <button
              className="focus:outline-none focus:ring-3 text-black bg-[#808080] font-medium rounded-lg text-sm"
              type="button"
              onClick={() => setSoul("Gray")}
            >
              2
            </button>
            <button
              className="focus:outline-none focus:ring-3 text-black bg-[#DA70D6] font-medium rounded-lg text-sm"
              type="button"
              onClick={() => setSoul("Violet")}
            >
              3
            </button>
          </div>
          <div className="p-0.5">
            <button
              className="py-4 w-62 px-8 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-extrabold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-start m-auto mb-6 mt-4 text-xl"
              onClick={() => setIsOpen(true)}
            >
              Купить
            </button>
          </div>
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="p-6">
                  <p className="text-black mb-6">
                    Вот как технологии THREE могут использоваться для
                    продвижения товаров
                  </p>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="bg-purple-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                    >
                      Закрыть
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cross;
