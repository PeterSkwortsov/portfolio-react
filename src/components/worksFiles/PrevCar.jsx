import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";
import { useRef, useState, useMemo } from "react";
import { Leva } from "leva";
import { Overlay } from "./Overlay";
import ManyCar from "../worksFiles/ManyCar";

const Section = styled.div`
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 40px;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    padding: 5px;
    justify-content: center;
    margin-right: 0rem;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ListItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    color: white;
    -webkit-text-stroke: 0px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
`;

const items = [
  "Wow-эффекты",
  "Шейдеры",
  "Движение",
  "Разрез детали",
  "Управление камерой",
  "Карточки товаров",
];
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