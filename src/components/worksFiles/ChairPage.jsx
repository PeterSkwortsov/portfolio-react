
import React, { Suspense } from "react";
import styled from "styled-components";
import { Bounds, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Environment, Loader } from "@react-three/drei";
import { Center } from "@react-three/drei";
import Pirates from "../worksFiles/Pirate";
import { OrbitControls } from "@react-three/drei";
import { AmbientLight, DirectionalLight } from "three";

const Desc = styled.div`
  width: 170px;
  height: 90px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 120px;
  right: 150px;

  @media only screen and (max-width: 768px) {
    top: 36rem;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
const ChairPage = () => {
  return (
    <div className="h-96">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <OrbitControls />
        <Suspense fallback={null}>
          <ambientLight intensity={2} />
          <directionalLight castShadow position={[0, 1, 5]} intensity={5} />
          <Pirates />
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{
          background: "rgba(10, 10, 10, 0.95)",
          padding: "30px 40px",
        }}
        innerStyles={{
          width: "300px",
          height: "6px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "3px",
        }}
        barStyles={{
          height: "100%",
          background: "linear-gradient(90deg, #667eea, #764ba2)",
          borderRadius: "3px",
        }}
        dataStyles={{
          color: "#e2e8f0",
          fontSize: "30px",
          fontWeight: "300",
          marginTop: "15px",
        }}
        dataInterpolation={(p) => `Загружаем модель  ${p.toFixed(0)}%`}
      />{" "}
      <Desc>
       Модель может перемещаться как игровой персонаж, только в браузере
      </Desc>
    </div>
  );
};

export default ChairPage;
