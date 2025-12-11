import React from "react";
import { useNavigate } from "react-router-dom";
import StartPages from "./StartPages";
import Header from '../components/Header';

const SecondPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="page">
      {/* Компонент 1 */}
      <div className="">
        <Header />
      </div>

      {/* Компонент 2 */}
      <div className="component component-2">
        <StartPages />
      </div>

      {/* Компонент 3 */}
      <div className="component component-3">
        <h2>Компонент 3</h2>
        <p>Третий полноэкранный компонент</p>
        <button onClick={handleBack} className="nav-button">
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default SecondPage; // Экспорт по умолчанию
