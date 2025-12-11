import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Experience } from "./components/experience/Experience";
import { UI } from "./components/ui/UI";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import StartPages from "./pages/StartPages";
import { useNavigate } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
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

        <Routes>
          <Route path="/" element={<UI />} />
          <Route path="/StartPages" element={<StartPages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
