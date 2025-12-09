// App.js
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Plane, OrbitControls, Sky, Stars } from '@react-three/drei';
import './App.css';

// Вращающийся куб
function RotatingBox() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      position={[-2, 0, 0]}
    >
      <meshStandardMaterial color="hotpink" />
    </Box>
  );
}

// Прыгающая сфера
function BouncingSphere() {
  const meshRef = useRef();
  const [direction, setDirection] = useState(1);

  useFrame(() => {
    if (meshRef.current.position.y > 2) setDirection(-1);
    if (meshRef.current.position.y < 0) setDirection(1);
    meshRef.current.position.y += 0.02 * direction;
    meshRef.current.rotation.x += 0.02;
    meshRef.current.rotation.y += 0.02;
  });

  return (
    <Sphere
      ref={meshRef}
      args={[0.8, 32, 32]}
      position={[2, 1, 0]}
    >
      <meshStandardMaterial color="lightblue" />
    </Sphere>
  );
}

// Вращающийся цилиндр
function RotatingCylinder() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.z += 0.02;
  });

  return (
    <Cylinder
      ref={meshRef}
      args={[0.5, 0.5, 1.5, 32]}
      position={[0, 0, -2]}
    >
      <meshStandardMaterial color="orange" />
    </Cylinder>
  );
}

// Основной компонент сцены
function Scene() {
  return (
    <>
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />

      {/* Небо */}
      <Sky
        distance={450000}
        sunPosition={[100, 20, 100]}
        inclination={0}
        azimuth={0.25}
      />

      {/* Звезды */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      {/* 3D объекты */}
      <RotatingBox />
      <BouncingSphere />
      <RotatingCylinder />

      {/* Пол */}
      <Plane
        args={[10, 10]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
      >
        <meshStandardMaterial color="gray" />
      </Plane>

      {/* Элементы управления */}
      <OrbitControls />
    </>
  );
}

// Главный компонент приложения
function App() {
  return (
    <div className="App">
      <h1>Простая 3D сцена на React</h1>
      <div className="scene-container">
        <Canvas camera={{ position: [5, 3, 5], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>
      <div className="instructions">
        <p>Используйте мышь для управления камерой:</p>
        <ul>
          <li>ЛКМ + движение - вращение сцены</li>
          <li>ПКМ + движение - перемещение камеры</li>
          <li>Колесико мыши - приближение/отдаление</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
