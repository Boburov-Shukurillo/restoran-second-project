import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGOS.svg";
import arrow from "../assets/arrow.png";
const Footer = () => {
  const scrolTo = () => {
    window.scrollTo({ top: 0, leftL: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-r from-darkenBlack to-perfectGray pt-6 pb-8">
      <div className="containerb flex items-center max-md:flex-col max-md:items-center relative">
        <button onClick={scrolTo} className="bg-white rounded-full  w-10 h-10 flex items-center justify-center max-md:absolute max-md:left-2 max-md:-top-3">
          <img className="w-3" src={arrow} alt="arrow png" />
        </button>
        <div className="flex flex-col  justify-between w-1/6 h-full mr-24 max-md:w-full max-md:items-center max-md:m-0">
          <Link to="/" className="mb-5">
            <img src={logo} alt="" />
          </Link>
          <p className="text-white text-xs giliroy-200 text-center">
            © ООО СК «АПШЕРОН» Все права защищены. 2010-2020
          </p>
          <a href="" className="text-sm text-white giliroy-200">
            Пользовательское соглашение
          </a>
          <a href="" className="text-sm text-white giliroy-200">
            Карта сайта
          </a>
          <a href="" className="text-sm text-white giliroy-200">
            Политика конфиденциальности
          </a>
        </div>
        <nav>
          <ul className="flex items-center justify-between gap-x-10 max-md:flex-wrap max-md:my-5 max-sm:flex-col">
            <li>
              <Link onClick={scrolTo} to="/" className="text-xl text-white giliroy-200">
                О ресторане
              </Link>
            </li>
            <li>
              <Link onClick={scrolTo} to='/dostavka' className="text-xl text-white giliroy-200">
                Условия доставки
              </Link>
            </li>
            <li>
              <Link onClick={scrolTo} to='/menu' className="text-xl text-white giliroy-200">
                Возврат товара
              </Link>
            </li>
            <li>
              <Link onClick={scrolTo} to='/aktsiya' className="text-xl text-white giliroy-200">Акции </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
