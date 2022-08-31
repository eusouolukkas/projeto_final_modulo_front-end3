import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Tasklist from "../pages/Tasklist";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/tasklist' element={<Tasklist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
