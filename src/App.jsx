import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import HomePage from './pages/HomePage';  
import SecondPage from './pages/SecondPage';  
import BorschStudia from "./pages/BorschStudia";
import Family from "./pages/Family-project";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Скроллит вверх при смене маршрута
  }, [pathname]);

  return null;
}

function App() {



  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/borschstudia" element={<BorschStudia />} />
        <Route path="/familyPages" element={<Family />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;