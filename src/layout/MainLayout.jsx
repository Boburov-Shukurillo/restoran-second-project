import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="bg-[#2C292A]">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
