import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

export const Router: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
