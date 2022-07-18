import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import { useAppSelector } from "../hooks/LocalReduxThunk";

export const Router: React.FunctionComponent = () => {
  const user = useAppSelector((state) => state.authReducer.loggedUser);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (user && pathname === "/") {
      navigate("/home");
    } else if (!user && pathname !== "/") {
      navigate("/");
    }
    
  }, [user, pathname]);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
