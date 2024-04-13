import React, { useEffect, useState } from "react";
import del from "../assets/cross.svg";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { foods } from "../data";
import arrow from "../assets/arrowLeft.png";
import Navbar from "../components/Navbar";
const Korzinka = ({ cart, setCart }) => {
  const [food2, setFood2] = useState(1);

  const add = (e) => {
    let bir = cart.find((r) => r.id === parseInt(e.target.id));
    bir.food += 1;
    setFood2(food2 + 1);
  };

  const handleRemove = (e) => {
    console.log(cart[e.target.id]);
    cart[e.target.id].food = 1;
    cart[e.target.id].isCart = false;
    let find = cart
      .slice(0, parseInt(e.target.id))
      .concat(cart.slice(parseInt(e.target.id) + 1, cart.length));
    setCart(() => {
      return [...find];
    });
  };

  const addToCart = (e) => {
    let find = foods.find((i) => i.id === parseInt(e.target.id));
    let isCart = cart.find((r) => r.id === parseInt(e.target.id));
    // alert(e.target.id);
    if (!isCart) {
      setCart((u) => {
        return [...u, find];
      });
      toast.success("This Product Have Is Cart", {
        autoClose: 500,
        position: "bottom-right",
      });
      find.isCart = true;
    } else {
      toast.error("tha Food already have is Cart", {
        autoClose: 500,
        position: "bottom-right",
      });
    }
  };

  const remove = (e) => {
    let bir = cart.find((r) => r.id === parseInt(e.target.id));
    if (bir.food > 1) {
      bir.food -= 1;
      setFood2(food2 - 1);
    }
  };

  let TotalPrice = [0];
  cart.map((product) => {
    TotalPrice.push(product.price * product.food);
  });

  let price = eval(TotalPrice.join("+"));
  const error = () => {
    toast.error("Минимальная сума заказа 1500 ₽", {
      autoClose: 500,
      pauseOnHover: false,
      position: "bottom-right",
    });
  };
  return (
    <div>
      <Navbar />
      <div className={`containerb flex flex-col items-center justify-center`}>
        <div className="flex flex-col items-start justify-between w-3/4 gap-y-10 pt-5">
          <Link
            to="/"
            className="text-xl text-white flex flex-row items-start gap-x-2 leading-3"
          >
            <img src={arrow} className="h-4" alt="" />к выбору блюда
          </Link>
          <h1 className="text-3xl text-white  flex justify-between gap-x-5 items-start before:content-[''] before:h-10 before:w-1 before:bg-graygreen">
            КОРЗИНА
            <span className="text-15 giliroy-200 text-graygreen">
              (в корзине {cart.length} товара)
            </span>
          </h1>
        </div>
        <ul className="w-3/4 rounded-xl overflow-hidden my-10 gap-y-0.5 flex flex-col items-center justify-between">
          {cart.map((i, index) => {
            return (
              <li
                key={i.id}
                className="text-white flex items-center justify-between p-3 pr-10 bg-perfectGray w-full"
              >
                <div className="flex items-center justify-between w-1/2 gap-x-10">
                  <img
                    src={i.img}
                    className="w-32 object-cover h-24 rounded-sm"
                    alt=""
                  />
                  <div className="flex flex-col w-full">
                    <h3>{i.name}</h3>
                    <h3 className="text-sm giliroy-200 text-white/50">
                      {i.description}
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between w-1/3">
                  <div className="w-1/3 flex items-center justify-between">
                    <button
                      id={i.id}
                      onClick={remove}
                      className="w-6 h-6 rounded-full bg-graygreen flex items-center justify-center"
                    >
                      <img id={i.id} src={minus} className="w-3" alt="" />
                    </button>
                    {i.food}
                    <button
                      id={i.id}
                      onClick={add}
                      className="w-6 h-6 rounded-full bg-graygreen flex items-center justify-center"
                    >
                      <img id={i.id} src={plus} className="w-3" alt="" />
                    </button>
                  </div>
                  <p className="text-xl giliroy-700">{i.price * i.food} ₽</p>
                  <button
                    className="w-6 h-6 rounded-full bg-graygreen flex items-center justify-center"
                    onClick={handleRemove}
                    id={index}
                  >
                    <img id={index} src={del} className="w-3 h-3" alt="" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <Swiper
          className="mb-10 cartSwiper w-3/4 overflow-hidden flex flex-col items-start justify-between rounded-xl"
          loop={true}
          slidesPerView={4}
        >
          {foods.map((e) => {
            return (
              <SwiperSlide
                key={e.id}
                className="bg-perfectGray pb-10 h-full pt-5 px-5 flex flex-col items-center justify-between gap-y-2.5"
              >
                <img
                  className="w-full h-40 rounded-xl"
                  src={e.img}
                  alt={e.name + " img"}
                />
                <h2 className="text-sm giliroy-500 text-white">{e.name}</h2>
                <button
                  id={e.id}
                  onClick={addToCart}
                  className="text-xs flex items-center justify-between text-white/50 giliroy-200 gap-x-1"
                >
                  Добавить
                  <img
                    id={e.id}
                    className="w-5 h-5 p-1 bg-graygreen rounded-full"
                    src={plus}
                    alt="plus img"
                  />
                </button>
                <p className="text-xs giliroy-700 text-white">{e.price} ₽</p>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <ToastContainer />
        <div className="w-3/4 mb-20 bg-perfectGray py-5 px-10 rounded-xl flex items-center justify-between">
          <div className="flex flex-col items-start gap-y-2">
            <p className="text-xl giliroy-200 text-white">
              <span className="text-sm text-white/50 giliroy-500">Итого: </span>
              {price} ₽
            </p>
            <p className="text-xs giliroy-200 text-white">
              До бесплатной доставки не хватет:{" "}
              <span className="text-graygreen">100 ₽</span>
            </p>
            <p className="text-xs giliroy-200 text-white">
              Минимальная сума заказа 1500 ₽
            </p>
          </div>
          {price > 1500 && (
            <Link
              to="/pay"
              className="text-sm giliroy-700 text-white px-5 py-3 bg-graygreen rounded-lg"
            >
              Оформить заказ
            </Link>
          )}
          {price < 1500 && (
            <Link
              onClick={error}
              className="text-sm giliroy-700 text-white px-5 py-3 bg-graygreen rounded-lg"
            >
              Оформить заказ
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Korzinka;
