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
import FieryGirl from "./pages/FieryGirl";
import TimeWatch from "./pages/TimeWatch";
import Stadium from "./pages/Stadium";
import DiscoveryPage from "./pages/Discovery-page";
import Discovery from "./pages/Discovery";
import Ball from "./pages/Ball";
import Game from "./pages/Game";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Скроллит вверх при смене маршрута
  }, [pathname]);

  return null;
}

function App() {



  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/borschstudia" element={<BorschStudia />} />
          <Route path="/familyPages" element={<Family />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/legoza" element={<Thirrd />} />
          <Route path="/fireyGirl" element={<FieryGirl />} />
          <Route path="/time-watch" element={<TimeWatch />} />
          <Route path="/stadium" element={<Stadium />} />
          <Route path="/discovery" element={<DiscoveryPage />} />
          <Route path="/discoveryStart" element={<Discovery />} />
          <Route path="/ball" element={<Ball />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;