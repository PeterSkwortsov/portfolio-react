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
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white to-blue-200">
            <div className="relative">
              <div className="h-24 w-24 animate-spin rounded-full border-8 border-transparent border-t-blue-400 border-r-purple-400 border-b-pink-400 border-l-indigo-400"></div>
              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-6 border-transparent border-t-indigo-300 border-r-blue-300 border-b-purple-300 border-l-pink-300 [animation-direction:reverse]"></div>
            </div>
          </div>
        }
      >
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