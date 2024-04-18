import React, { useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ cart }) => {
  const mylocation = useLocation();
  const getUrl = mylocation.pathname.split("/").join("");
  const [swiper, setSwiper] = useState(false)
  setInterval(() => {
    if (window.innerWidth < 780) {
      setSwiper(true)
    } else {
      setSwiper(false)
    }
  }, 1);
  return (
    <div className="bg-[#2C292A] bg">
      {swiper && getUrl === "menu" ? < Header cart={cart} /> : < Header cart={cart} />}
      {getUrl !== "" && <Navbar cart={cart} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
