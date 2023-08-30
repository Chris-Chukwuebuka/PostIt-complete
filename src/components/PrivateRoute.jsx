import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  const content = token ? <Outlet /> : <Navigate to="/login" />;
  return content;
};

export default PrivateRoute;
