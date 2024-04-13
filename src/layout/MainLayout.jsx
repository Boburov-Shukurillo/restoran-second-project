import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ cart }) => {
  const mylocation = useLocation();
  const getUrl = mylocation.pathname.split("/").join("");

  return (
    <div className="bg-[#2C292A] bg">
      {getUrl.toLowerCase() !== "menu".toLowerCase() && <Header cart={cart} />}
      {getUrl.toLowerCase() === "menu".toLowerCase() && <Navbar cart={cart} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
