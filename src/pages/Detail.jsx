import React, { useState } from "react";
import { Form, Link, useLocation } from "react-router-dom";
import { foods } from "../data";
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";
import bin from '../assets/bin.svg'
import buy from "../assets/Buy.png";
import { ToastContainer, toast } from 'react-toastify'
import { Swiper, SwiperSlide } from 'swiper/react'
import Map from "../components/Map";
const Detail = ({ data, setCart, cart }) => {
  const location = useLocation();
  const getIdFromFoods = +location.pathname
    .split("/")
    .join("")
    .split("foods")
    .join("");
  const getFoods = foods.find((e) => e.id === getIdFromFoods);

  const handleBuy = (e) => {
    let find = data.find((r) => r.id === parseInt(e.target.id));
    let findCart = cart.find((r) => r.id === parseInt(e.target.id));
    find.isCart = true;
    if (!findCart) {
      setCart((d) => {
        return [...d, find];
      });
    } else {
      toast.error("Bu mahsulot karda mavjud", {
        position: "bottom-right",
        autoClose: 500,
      });
    }
  };

  return (
    <div>
      <div className="containerb py-20 overflow-hidden flex flex-col gap-y-10">
          <ToastContainer />
        <div className="flex h-400 items-start justify-start gap-x-12 bg-perfectGray rounded-xl overflow-hidden max-md:flex-col max-md:items-center max-md:w-2/3 max-sm:w-full max-md:self-center">
          <img src={getFoods.img} alt={getFoods.name + " img"} className="w-1/2 h-full object-cover max-md:w-full max-md:h-1/2" />

          <div className="w-1/2 flex items-start flex-col justify-center h-full  max-md:w-full max-md:items-center max-400:px-2">
            <div className="flex items-start gap-y-2 flex-col mb-20 max-md:m-0 max-md:items-center">
              <h1 className="text-2xl giliroy-700 text-white">{getFoods.name}</h1>
              <p className="text-sm text-gray giliroy-200 max-sm:text-center">{getFoods.description}</p>
            </div>
            <div className="flex flex-col items-start justify-between gap-y-5 mb-10 max-md:m-0 max-md:mb-3 max-md:w-full max-md:items-center">
              <p className="text-sm text-white giliroy-200">Вес: {getFoods.massa} г</p>
              <div className="flex items-center gap-x-10">
                <button id={getFoods.id} onClick={handleBuy} className="flex items-center justify-between bg-graygreen px-8 py-4 rounded-[10px] gap-x-3 text-white giliroy-500 tracking-widest text-sm max-md:text-xs max-md:px-5 max-md:py-2">Корзина <img id={getFoods.id} src={bin} className="border-l-2 p-2" alt="" /></button>
                <p className="text-25 text-white giliroy-700">{getFoods.price}$ ~ {i.price * i.food}$ ~ {i.price*13000*i.food}uzs</p>
              </div>
            </div>

            <div className="w-2/3">
              <div className="w-full flex justify-between  giliroy-200 text-gray max-md:text-xs">
                <span className="text-center">Жиры</span>
                <span className="text-center">Углеводы</span>
                <span className="text-center">Ккал</span>
                <span className="text-center">Вес</span>
              </div>

              <div className="w-full h-0.5 my-5 gradient max-md:my-2"></div>

              <div className="w-full flex items-center justify-between text-white giliroy-700 max-md:text-xs">
                <span className="text-center">{getFoods.oil}</span>
                <span className="text-center">{getFoods.uglerod}</span>
                <span className="text-center">{getFoods.kkal}</span>
                <span className="text-center">{getFoods.massa}</span>
              </div></div>

          </div>
        </div>
        <div className="gradient w-full h-0.5"></div>

        <h1 className="text-white giliroy-700 text-3xl before:content-[''] before:w-1 before:h-10 before:bg-graygreen flex items-center gap-x-5 mb-12">
          С ЭТИМ ТОВАРОМ ПОКУПАЮТ
        </h1>

        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          className="classicSwiper flex items-center justify-between"
        >
          {foods.map((item) => {
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
                className="text-white h-full relative bg-perfectGray flex flex-col items-start justify-between w-full rounded-xl"
              >
                <Link to={`/foods/${item.id}`} className="w-full">
                  <img
                    src={item.img}
                    alt={item.name + "" + " img"}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />{" "}
                </Link>
                <div className="px-4 pb-4 pt-1 flex flex-col w-full h-full justify-between">
                  <div className="w-full flex justify-between flex-col gap-y-0.5">
                    <div className="flex items-center justify-between w-full">
                      <h2 className="giliroy-500 text-22">{item.name}</h2>
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
                      <p>{item.price * item.food}$ ~ {item.price*13000*i.food}uzs</p>
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
                      <p>{item.price * item.food}$  ~ {item.price*13000*item.food}uzs</p>
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
      <Map />
    </div>
  );
};

export default Detail;
