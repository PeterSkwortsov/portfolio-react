import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";
import { useRef, useState, useMemo } from "react";
import { Leva } from "leva";
import { Overlay } from "./Overlay";
import ManyCar from "../worksFiles/ManyCar";
import { Loader } from "@react-three/drei";

const PrevCar = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Suspense fallback={"loading..."}>
        <Leva hidden />
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <ManyCar />
        </Canvas>
        <Overlay />
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
          dataInterpolation={(p) => `Загружаем сайт  ${p.toFixed(0)}%`}
        />
      </Suspense>
    </div>
  );
};

export default PrevCar;