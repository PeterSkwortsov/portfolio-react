import React from "react";
import { UI } from "../components/ui/UI";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "../components/experience/Experience";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";


const HomePage = () => {

 function CameraController() {
   const { camera } = useThree();
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
     const handleResize = () => {
       const mobile = window.innerWidth <= 768;
       setIsMobile(mobile);
       camera.fov = mobile ? 110 : 65;
       camera.updateProjectionMatrix();
     };

     handleResize();
     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize);
   }, [camera]);

   return null;
 }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas camera={{ position: [0, 0, 8] }}>
        <CameraController />

        <color attach="background" args={["#171720"]} />
        <fog attach="fog" args={["#171720", 10, 30]} />
        <Suspense>
          <Experience />
        </Suspense>

        <OrbitControls
          enablePan={false} // Запретить перемещение
          enableRotate={false} // Запретить вращение
          enableZoom={false}
        />
      </Canvas>

      <UI />
    </div>
  );
};

export default HomePage; // Экспорт по умолчанию
