import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getToken } from "./LocalStorageService";

const ProtectedRoutes = () => {
  const auth = getToken("token");

  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
