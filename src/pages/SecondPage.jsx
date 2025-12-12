import React from "react";
import { useNavigate } from "react-router-dom";
import StartPagesTwo from "../components/StartPagesTwo";
import Header from '../components/Header';
import Grid from "../components/Grid";
import TimelineComponent from "../components/Line";
import Phone from "../components/Phone";
const SecondPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="page">
      {/* Компонент 1 */}
      <div className="component">
        <Header />
      </div>

      {/* Компонент 2 */}
      <div className="component">
        <StartPagesTwo />
      </div>
      <div className="component">
        <Grid />
      </div>

      {/* Компонент 3 */}
      <div className="component">
        <TimelineComponent />
      </div>
      <div className="component">
        <Phone />
      </div>
      <div className="component">
        {/* <Like /> */}
      </div>
      {/* <div className="component">
        <TimelineComponent />
      </div> */}

      <button onClick={handleBack} className="nav-button">
        Вернуться на главную
      </button>
    </div>
  );
};

export default SecondPage; // Экспорт по умолчанию
