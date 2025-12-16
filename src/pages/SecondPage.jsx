import React from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Grid from "../components/Grid";
import TimelineComponent from "../components/Line";
import Phone from "../components/Phone";
import AboutMe from "../components/AboutMe";
import Like from "../components/CreativeApproachAnimated";
import Superpower from "../components/Superpower";
import Works from "../components/Works";


const SecondPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="page">
      <div className="component">
        <Header />
      </div>

      {/* <div className="component">
        <AboutMe />
      </div>
      <div className="component">
        <Grid />
      </div>

      <div className="component">
        <TimelineComponent />
      </div>
      <div className="component">
        <Phone />
      </div>
      <div className="component">
        <Like />
      </div> */}
      <div className="component">
        <Superpower />
      </div>
      <div className="component">
        <Works />
      </div>

      {/* <button onClick={handleBack} className="nav-button">
        Вернуться на главную
      </button> */}
    </div>
  );
};

export default SecondPage; // Экспорт по умолчанию
