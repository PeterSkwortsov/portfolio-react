import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Suspense } from "react";

import HomePage from './pages/HomePage';  
import SecondPage from './pages/SecondPage';  
import BorschStudia from "./pages/BorschStudia";
import Family from "./pages/Family-project";
import Gallery from "./pages/Gallery";
import Thirrd from "./pages/Legoza";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Скроллит вверх при смене маршрута
  }, [pathname]);

  return null;
}

function App() {



  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 grid place-items-center bg-black text-white">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-300 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl font-light">Загружаем портфолио...</p>
          </div>
        </div>
      }
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/borschstudia" element={<BorschStudia />} />
          <Route path="/familyPages" element={<Family />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/legoza" element={<Thirrd />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;