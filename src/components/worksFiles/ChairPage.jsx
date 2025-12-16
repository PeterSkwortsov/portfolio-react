
import React, { Suspense } from "react";
import styled from "styled-components";
import { Bounds, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Environment, Loader } from "@react-three/drei";
import { Center } from "@react-three/drei";
import Pirates from "../worksFiles/Pirate";
import { OrbitControls } from "@react-three/drei";

const ChairPage = () => {
  return (
    <div
    className="h-96">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <OrbitControls />
        <Suspense fallback={null}>
          <Environment
            preset="dawn"
            background={false}
           
          />
            <Pirates />
        
        </Suspense>
      </Canvas>
      <Loader />
      {/* <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc> */}
    </div>
  );
};

export default ChairPage;
