import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { foods } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import minus from "../assets/minus.png";
import buy from "../assets/Buy.png";
import plus from "../assets/plus.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const Menu = ({ setCart, cart, data, setData }) => {
  const [swiper, setSwiper] = useState(4)
    setInterval(() => {
      if (window.innerWidth < 1200 && window.innerWidth > 780) {
        setSwiper(3)
      } else if (window.innerWidth < 780 && window.innerWidth > 580) {
        setSwiper(2)
      } else if (window.innerWidth < 580 && window.innerHeight > 0) {
        setSwiper(1)
      }
    }, 1);
  return (
    <div className={`overflow-hidden pt-24`}>
      <div className="border-b-2 border-whitenBlack py-10">
        <div className="containerb overflow-hidden">
          <h1 className="text-white giliroy-700 text-3xl before:content-[''] before:w-1 before:h-10 before:bg-graygreen flex items-center gap-x-5 mb-12">
            ХОЛОДНЫЕ ЗАКУСКИ
          </h1>
          <Swiper
            loop={true}
            slidesPerView={swiper}
            spaceBetween={20}
            className="classicSwiper"
          >
            {data.slice(0, 6).map((item) => {
              const [isBuy, setIsBuy] = useState(item.isCart);
              const [food, setFood] = useState(item.food);
              const handleBuy = (e) => {
                let find = data.find((r) => r.id === parseInt(e));
                let findCart = cart.find((r) => r.id === parseInt(e));
                setIsBuy(true);
                find.isCart = true;
                if (!findCart) {
                  setCart((d) => {
                    return [...d, find];
                  });
                }
              };

              const addPr = (e) => {
                let find = data.find((r) => r.id === parseInt(e));
                find.food += 1;
                setFood(food + 1);
              };
              const removePr = (e) => {
                let find = data.find((r) => r.id === parseInt(e));
                if (find.food > 1) {
                  find.food -= 1;
                  setFood(food - 1);
                }
              };

              return (
                <SwiperSlide
                  key={item.id}
                  className="text-white relative bg-perfectGray flex flex-col items-start justify-between w-full rounded-xl"
                >
                  <img
                    src={item.img}
                    alt={item.name + "" + " img"}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="px-4 pb-4 pt-1 flex flex-col w-full h-full justify-between">
                    <div className="w-full flex justify-between flex-col gap-y-0.5">
                      <div className="flex items-center justify-between w-full">
                        <h2 className="giliroy-500 text-22 max-md:text-lg">{item.name}</h2>
                        <p className="giliroy-200 text-xs text-white/80">
                          Вес: {item.massa}г
                        </p>
                      </div>
                      <p className="text-13 giliroy-200 tracking-wider text-white/50">
                        {item.description}
                      </p>
                    </div>
                    {!isBuy && (
                      <div className="flex items-center justify-between w-full">
                        <p>{item.price * item.food}$</p>
                        <button
                          onClick={() => handleBuy(item.id)}
                          className="px-5 bg-graygreen rounded-lg giliroy-200 py-3 flex items-center justify-between gap-x-5 "
                        >
                          В корзину <img src={buy} alt="buy img" />
                        </button>
                      </div>
                    )}
                    {isBuy && (
                      <p className="w-10 h-10 bg-graygreen rounded-full flex items-center justify-center absolute -top-3 -right-3 text-xl giliroy-200">
                        {item.food}
                      </p>
                    )}
                    {isBuy && (
                      <div className="w-full flex items-center justify-between">
                        <button
                          onClick={() => removePr(item.id)}
                          className="w-16 h-12 flex items-center justify-center bg-graygreen rounded-xl shadow-xl shadow-graygreen/50"
                        >
                          <img src={minus} alt="minus" />
                        </button>
                        <p>{item.price * item.food}$</p>
                        <button
                          onClick={() => addPr(item.id)}
                          className="w-16 h-12 flex items-center justify-center bg-graygreen rounded-xl shadow-xl shadow-graygreen/50"
                        >
                          <img src={plus} alt="plus" />
                        </button>
                      </div>
                    )}
                    {/* {isBuy && } */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="border-b-2 border-whitenBlack py-10">
        <div className="containerb overflow-hidden">
          <h1 className="text-white giliroy-700 text-3xl before:content-[''] before:w-1 before:h-10 before:bg-graygreen flex items-center gap-x-5 mb-12">
            ГОРЯЧИЕ ЗАКУСКИ
          </h1>
          <Swiper slidesPerView={swiper} spaceBetween={20} className="classicSwiper">
            {data.slice(6, 12).map((item) => {
              const [isBuy, setIsBuy] = useState(item.isCart);
              const [food, setFood] = useState(item.food);
              const handleBuy = (e) => {
                let find = data.find((r) => r.id === parseInt(e));
                let findCart = cart.find((r) => r.id === parseInt(e));
                setIsBuy(true);
                find.isCart = true;
                if (!findCart) {
                  setCart((d) => {
                    return [...d, find];
                  });
                }
              };

              const addPr = (e) => {
                let find = data.find((r) => r.id === parseInt(e));
                find.food += 1;
                setFood(food + 1);
              };
              const removePr = (e) => {
                let find = data.find((r) => r.id === parseInt(e));
                if (find.food > 1) {
                  find.food -= 1;
                  setFood(food - 1);
                }
              };
              return (
                <SwiperSlide
                  key={item.id}
                  className="text-white relative bg-perfectGray flex flex-col items-start justify-between w-full rounded-xl"
                >
                  <img
                    src={item.img}
                    alt={item.name + "" + " img"}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="px-4 pb-4 pt-1 flex flex-col w-full h-full justify-between">
                    <div className="w-full flex justify-between flex-col gap-y-0.5">
                      <div className="flex items-center justify-between w-full">
                        <h2 className="giliroy-500 text-22 max-md:text-lg">{item.name}</h2>
                        <p className="giliroy-200 text-xs text-white/80">
                          Вес: {item.massa}г
                        </p>
                      </div>
                      <p className="text-13 giliroy-200 tracking-wider text-white/50">
                        {item.description}
                      </p>
                    </div>
                    {!isBuy && (
                      <div className="flex items-center justify-between w-full">
                        <p>{item.price * item.food}$</p>
                        <button
                          onClick={() => handleBuy(item.id)}
                          className="px-5 bg-graygreen rounded-lg giliroy-200 py-3 flex items-center justify-between gap-x-5 "
                        >
                          В корзину <img src={buy} alt="buy img" />
                        </button>
                      </div>
                    )}
                    {isBuy && (
                      <p className="w-10 h-10 bg-graygreen rounded-full flex items-center justify-center absolute -top-3 -right-3 text-xl giliroy-200">
                        {item.food}
                      </p>
                    )}
                    {isBuy && (
                      <div className="w-full flex items-center justify-between">
                        <button
                          onClick={() => removePr(item.id)}
                          className="w-16 h-12 flex items-center justify-center bg-graygreen rounded-xl shadow-xl shadow-graygreen/50"
                        >
                          <img src={minus} alt="minus" />
                        </button>
                        <p>{item.price * item.food}$</p>
                        <button
                          onClick={() => addPr(item.id)}
                          className="w-16 h-12 flex items-center justify-center bg-graygreen rounded-xl shadow-xl shadow-graygreen/50"
                        >
                          <img src={plus} alt="plus" />
                        </button>
                      </div>
                    )}
                    {/* {isBuy && } */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="border-b-2 border-whitenBlack py-10">
        <div className=" containerb overflow-hidden">
          <h1 className="text-white giliroy-700 text-3xl before:content-[''] before:w-1 before:h-10 before:bg-graygreen flex items-center gap-x-5 mb-12">
            Мясные блюда
          </h1>
          <Swiper
            loop={true}
            slidesPerView={swiper}
            spaceBetween={20}
            className="classicSwiper"
          >
            {data.slice(data.length - 6, data.length).map((item) => {
              const [isBuy, setIsBuy] = useState(item.isCart);
              const [food, setFood] = useState(item.food);
              const handleBuy = (e) => {
                let find = data.find((r) => r.id === parseInt(e));
                let findCart = cart.find((r) => r.id === parseInt(e));
                setIsBuy(true);
                find.isCart = true;
                if (!findCart) {
                  setCart((d) => {
                    return [...d, find];
                  });
                }
              };

              const addPr = (e) => {
                let find = data.find((r) => r.id === parseInt(e));
                find.food += 1;
                setFood(food + 1);
              };
              const removePr = (e) => {
                let find = data.find((r) => r.id === parseInt(e));
                if (find.food > 1) {
                  find.food -= 1;
                  setFood(food - 1);
                }
              };

              return (
                <SwiperSlide
                  key={item.id}
                  className="text-white relative bg-perfectGray flex flex-col items-start justify-between w-full rounded-xl"
                >
                  <img
                    src={item.img}
                    alt={item.name + "" + " img"}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="px-4 pb-4 pt-1 flex flex-col w-full h-full justify-between">
                    <div className="w-full flex justify-between flex-col gap-y-0.5">
                      <div className="flex items-center justify-between w-full">
                        <h2 className="giliroy-500 text-22 max-md:text-lg">{item.name}</h2>
                        <p className="giliroy-200 text-xs text-white/80">
                          Вес: {item.massa}г
                        </p>
                      </div>
                      <p className="text-13 giliroy-200 tracking-wider text-white/50">
                        {item.description}
                      </p>
                    </div>
                    {!isBuy && (
                      <div className="flex items-center justify-between w-full">
                        <p>{item.price * item.food}$</p>
                        <button
                          onClick={() => handleBuy(item.id)}
                          className="px-5 bg-graygreen rounded-lg giliroy-200 py-3 flex items-center justify-between gap-x-5 "
                        >
                          В корзину <img src={buy} alt="buy img" />
                        </button>
                      </div>
                    )}
                    {isBuy && (
                      <p className="w-10 h-10 bg-graygreen rounded-full flex items-center justify-center absolute -top-3 -right-3 text-xl giliroy-200">
                        {item.food}
                      </p>
                    )}
                    {isBuy && (
                      <div className="w-full flex items-center justify-between">
                        <button
                          onClick={() => removePr(item.id)}
                          className="w-16 h-12 flex items-center justify-center bg-graygreen rounded-xl shadow-xl shadow-graygreen/50"
                        >
                          <img src={minus} alt="minus" />
                        </button>
                        <p>{item.price * item.food}$</p>
                        <button
                          onClick={() => addPr(item.id)}
                          className="w-16 h-12 flex items-center justify-center bg-graygreen rounded-xl shadow-xl shadow-graygreen/50"
                        >
                          <img src={plus} alt="plus" />
                        </button>
                      </div>
                    )}
                    {/* {isBuy && } */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Menu;
