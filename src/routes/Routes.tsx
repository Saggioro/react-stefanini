import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login";
//import ControleRedirecionamento from 'pages/infra/ControleRedirecionamento';

export const Router: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
