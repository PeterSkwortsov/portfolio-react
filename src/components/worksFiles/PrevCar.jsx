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
      </Suspense>
    </div>
  );
};

export default PrevCar;