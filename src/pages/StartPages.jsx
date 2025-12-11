import { Link } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { Loader } from "@react-three/drei";
import AboutMe from "../components/AboutMe";
import { Outlet } from "react-router-dom";
const StartPages = () => {
  return (
    <>
      <div
        
      >
        <div>
          <AboutMe />
        </div>
      </div>
    </>
  );
};

export default StartPages;
