import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Clouds,
  Cloud,
  OrbitControls,
  Loader,
  Environment,
} from "@react-three/drei";

import { useState } from "react";

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full mt-20 h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, -10, 10], fov: 70 }}>
            <Environment
              files="/kloppenheim_06_puresky_1k.hdr" // Путь к вашему HDRI
              background={true}
            />
            <Sky />
            <ambientLight intensity={Math.PI / 1.5} />
            <spotLight
              position={[0, 40, 0]}
              decay={0}
              distance={45}
              penumbra={1}
              intensity={10}
            />
            <spotLight
              position={[-20, 0, 10]}
              color="red"
              angle={0.15}
              decay={0}
              penumbra={-1}
              intensity={10}
            />
            <spotLight
              position={[20, -10, 10]}
              color="red"
              angle={0.2}
              decay={0}
              penumbra={-1}
              intensity={10}
            />
            <OrbitControls
              enableDamping={false}
              enablePan={false}
              enableZoom={false}
            />
          </Canvas>
          <Loader />
        </Suspense>
      </div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div
          className="
        bg-black/20 
        backdrop-blur-xl
        border border-white/20
        p-6 
        md:p-8 
        lg:p-12 
        rounded-2xl
        text-center 
        max-w-md
        md:max-w-8xl
        lg:max-w-8xl
        mx-auto

      "
        >
          <h5
            className="
          text-3xl 
          md:text-4xl 
          lg:text-5xl 
          font-bold 
         text-white
          mb-2
          md:mb-2
        "
          >
            Творческий подход
          </h5>
          <p
            className="
          text-base 
          md:text-lg 
          lg:text-xl 
          text-white/80 
          
          mb-5
        "
          >
            Получаю настоящее удовольствие, когда создаю что-то с чистого листа.
            <br></br>
            Каждый проект - это попытка создать что-то особенное.
          </p>
          <p
            className="
          text-base 
          md:text-lg 
          lg:text-xl 
          text-white/80 
         
        "
          >
            Мне нравится влиять на каждый аспект сайта - от концепции до
            реализации. Это даёт свободу для творчества и новых решений.
          </p>
          <img
            src="/down.png"
            alt="Описание изображения"
            width={50}
            height={50}
            style={{
              margin: "0 auto",
              marginTop: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Sky() {
  const ref = useRef();
  const cloud0 = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
    // cloud0.current.rotation.y -= delta;
  });
  return (
    <>
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={10}>
          {/* <Cloud ref={cloud0} bounds={[2, 7, 9]} color={"red"} /> */}
          <Cloud
            args={[1, 32, 32]} // Простая сфера без текстуры
            position={[0, 0, 0]}
            scale={[10, 10, 10]}
          >
            <meshBasicMaterial color="red" transparent opacity={1} />
          </Cloud>
          <Cloud
            args={[1, 32, 32]} // Простая сфера без текстуры
            position={[0, 0, 0]}
            scale={[3, 1, 1]}
          >
            <meshBasicMaterial color="red" transparent opacity={1} />
          </Cloud>
          <Cloud
            args={[1, 32, 32]} // Простая сфера без текстуры
            position={[0, 0, 0]}
            scale={[2, 2, 2]}
          >
            <meshBasicMaterial color="red" transparent opacity={1} />
          </Cloud>
        </Clouds>
      </group>
    </>
  );
}
