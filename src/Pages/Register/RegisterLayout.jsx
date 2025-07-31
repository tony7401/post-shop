import React from "react";
import RegisterHeader from "./RegisterHeader";
import { Outlet } from "react-router-dom";

const RegisterLayout = () => {
  return (
    <div className="w-[1500px] mx-auto">
      <RegisterHeader />
      <Outlet />
    </div>
  );
};

export default RegisterLayout;
