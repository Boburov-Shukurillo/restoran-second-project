import React from "react";
import Logo from "../assets/LOGOS.svg";
import Call from "../assets/Calling.svg";
import Search from "../assets/Search.svg";
import Locatio from "../assets/Location.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-perfectGray py-5">
      <div className="containerb flex items-center justify-between">
        <img src={Logo} alt="Logo icon" />

        <label
          className=" w-1/3 flex items-center justify-between rounded-xl bg-focusGray px-5"
          htmlFor="input"
        >
          <img
            src={Locatio}
            alt="Locatio icon"
            className="w-6 h-6 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Введите адрес доставки"
            className="p-5 py-3 w-full bg-transparent outline-none text-lg font-semibold text-white"
            id="input"
          />
          <img
            src={Search}
            alt="Search icon"
            className="w-6 h-6 cursor-pointer"
          />
        </label>
        <div className="flex items-center justify-between gap-2.5">
          <span className="w-10 h-10 bg-graygreen rounded-full flex items-center justify-center">
            <img src={Call} className="fill-red-600" alt="Call icon" />
          </span>
          <div className="flex flex-col font-semibold text-white">
            <span className="giliroy text-gray">Контакты:</span>
            <span className="giliroy"> +7 (917) 510-57-59</span>
          </div>
        </div>

        <Link className="px-5 py-3 bg-graygreen rounded-xl giliroy text-white flex items-center justify-between">
          Корзина <span className="w-0.5 h-7 inline-block bg-gray mx-3"></span> <span>0</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
