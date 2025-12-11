import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const UI = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Хук для навигации

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e) => {
    navigate("/second");
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      opacity-0 ${
        isVisible ? "opacity-100" : ""
      } transition-opacity duration-500
      `}
      >
        <div className="h-[66%]"></div>
        {isVisible && (
          <button
            onClick={handleClick}
            onPointerOver={() => {
              setIsHovered(true);
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              setIsHovered(false);
              document.body.style.cursor = "default";
            }}
            className="pointer-events-auto py-4 px-8 bg-purple-700 text-white font-black rounded-full hover:bg-purple-500 cursor-pointer transition-colors duration-3000"
          >
            СТАРТ
          </button>
        )}
      </section>
    </div>
  );
};
