import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = ({ cart }) => {
  return (
    <div className="bg-[#2C292A]">
      <div className="w-full h-1/2 bottom-0 bg-gradient-to-b from-transparent to-[#222] fixed z-20"></div>
      <Header cart={cart} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
