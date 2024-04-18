import React, { useState } from "react";
import Logo from "../assets/LOGOS.svg";
import Call from "../assets/Calling.svg";
import Search from "../assets/Search.svg";
import Locatio from "../assets/Location.svg";
import { Link } from "react-router-dom";
import savat from '../assets/Iconly_Buy.svg'
import menu from '../assets/menu.svg'
import illustrationCart from '../assets/illustration-cart.svg'
import plus from '../assets/plus.svg'
const Header = ({ cart }) => {
  const [modal, setModal] = useState(false)
  return (
    <header className="bg-perfectGray py-5">
      <div className="containerb flex flex-col gap-y-5">
        <div className="w-full flex items-center justify-between">
          <button className="hidden max-md:block">
            <img src={menu} className="w-10" alt="" />
          </button>
          <Link to="/">
            <img src={Logo} alt="Logo icon" />
          </Link>

          <label
            className="w-1/3 flex items-center justify-between rounded-xl bg-focusGray px-5 max-md:hidden"
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

          <div className="flex items-center justify-between gap-2.5 max-md:hidden">
            <span className="w-10 h-10 bg-graygreen rounded-full flex items-center justify-center">
              <img src={Call} className="fill-red-600" alt="Call icon" />
            </span>
            <div className="flex flex-col font-semibold text-white">
              <span className="giliroy text-gray">Контакты:</span>
              <span className="giliroy"> +7 (917) 510-57-59</span>
            </div>
          </div>

     

          {cart.length === 0 && <button onClick={() => setModal(true)}
            className="px-5 py-3 bg-gradient-to-r from-graygreen to-darkenGrayGrenn rounded-xl giliroy text-white flex items-center justify-between max-md:flex-col max-md:p-2 max-md:gap-1 max-md:px-4"
          >
            <img src={savat} alt="buy icon" className="w-5 hidden max-md:block" />
            <span className="max-md:order-2 max-md:text-xs lowercase">Корзина</span><span className="w-0.5 h-7 inline-block bg-gray mx-3 max-md:w-full max-md:h-[1px] max-md:order-1"></span>
            <span className="w-5 h-5 rounded-full bg-white  text-graygreen flex items-center justify-center max-md:hidden">{cart.length}</span>
          </button>}

          {cart.length !== 0 && <Link to='/korzinka'
            className="px-5 py-3 bg-gradient-to-r from-graygreen to-darkenGrayGrenn rounded-xl giliroy text-white flex items-center justify-between max-md:flex-col max-md:p-2 max-md:gap-1 max-md:px-4"
          >
            <img src={savat} alt="buy icon" className="w-5 hidden max-md:block" />
            <span className="max-md:order-2 max-md:text-xs lowercase">Корзина</span><span className="w-0.5 h-7 inline-block bg-gray mx-3 max-md:w-full max-md:h-[1px] max-md:order-1"></span>
            <span className="w-5 h-5 rounded-full bg-white  text-graygreen flex items-center justify-center max-md:hidden">{cart.length}</span>
          </Link>}

          {modal && <div onClick={() => setModal(false)} className="flex items-center justify-center w-full h-full fixed bg-gradient-to-r from-black/40  to-black/70 top-0 left-0 z-20">
            <div className="absolute w-96 h-96 bg-newGray z-50 rounded-xl p-10 flex flex-col items-center justify-center gap-y-5 max-md:scale-50">
              <img src={illustrationCart} alt="iliustration cart" />
              <img src={plus} className="rotate-45 absolute top-7 right-7 w-7 cursor-pointer" alt="close img" />
              <h2 className="text-3xl giliroy-700 text-white">КОРЗИНА ПУСТАЯ</h2>
              <Link to='/menu' className="px-8 py-4 bg-graygreen rounded-xl text-sm giliroy-200 text-white inline-block">Посмотреть меню</Link>
            </div>
          </div>}

        </div>
        <label
          className="w-full max-md:flex items-center justify-between rounded-xl bg-focusGray px-5 hidden"
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
            className="h-14 pb-1 w-full bg-transparent outline-none text-lg font-semibold text-white max-md:placeholder:text-sm"
            id="input"
          />
          <img
            src={Search}
            alt="Search icon"
            className="w-6 h-6 cursor-pointer"
          />
        </label>
      </div>
    </header>
  );
};

export default Header;
