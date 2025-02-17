import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateComponent() {
  let auth;
  useEffect(()=>{
    const login = localStorage.getItem("user");
    if(login=="" || login=="Login"){
      localStorage.setItem("user","Login");
    }
  })
  auth = localStorage.getItem("user");
  return auth != "Login" ? <Outlet /> : <Navigate to="/Login" />;
}

export default PrivateComponent;
