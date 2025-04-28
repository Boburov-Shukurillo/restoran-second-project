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
    toast.error("Минимальная сума заказа 150 $", {
      autoClose: 500,
      pauseOnHover: false,
      position: "bottom-right",
    });
  };

  return (
    <div>
      <div className={`containerb flex flex-col items-center justify-center gap-y-5`}>
        <div className="flex flex-col items-start justify-between w-3/4 gap-y-10 pt-5 max-md:w-full">
          <Link
            to="/"
            className="text-xl text-white flex flex-row items-start gap-x-2 leading-3"
          >
            <img src={arrow} className="h-4" alt="" />к выбору блюда
          </Link>
          <h1 className="text-3xl text-white flex justify-between gap-x-5 items-start before:content-[''] before:h-10 before:w-1 before:bg-graygreen max-md:text-xl max-md:items-center">
            КОРЗИНА
            <span className="text-15 giliroy-200 text-graygreen max-md:text-xs">
              (в корзине {cart.length} товара)
            </span>
          </h1>
        </div>

        <ul className="w-3/4 rounded-xl overflow-hidden my-10 gap-y-0.5 flex flex-col items-center justify-between max-md:w-full">
          {cart.map((i, index) => {
            return (
              <li
                key={i.id}
                className="text-white flex items-center justify-between p-3 pr-10 bg-perfectGray w-full max-md:flex-col max-md:p-0 max-400:p-5"
              >
                <div className="flex items-center justify-between w-1/2 gap-x-10 max-md:w-full max-400:w-full max-400:justify-center">
                  <img
                    src={i.img}
                    className="w-32 object-cover h-24 rounded-sm max-md:w-52 max-400:hidden"
                    alt={i.name + " img"}
                  />
                  <div className="flex flex-col w-4/5 justify-between max-400:w-full">
                    <h3 className="max-md:text-xl max-md:mb-3 max-md:giliroy-700 max-400:text-center">{i.name}</h3>
                    <h3 className="text-sm giliroy-200 text-white/50 max-md:hidden">
                      {i.description}
                    </h3>

                    <div className="hidden justify-between w-full max-md:flex items-center pr-10">
                      <div className="w-1/2 flex items-center justify-between ">
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

                      <p className="max-md:text-base giliroy-200">{i.price * i.food} ~ {i.price*13000}uzs $</p>
                      <button
                        className="w-6 h-6 rounded-full bg-graygreen flex items-center justify-center"
                        onClick={handleRemove}
                        id={index}
                      >
                        <img id={index} src={del} className="w-3 h-3" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-1/3 max-md:hidden">
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

                  <p className="text-xl giliroy-700">{i.price * i.food} $</p>
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
          className="mb-10 cartSwiper w-3/4 overflow-hidden flex flex-col items-start justify-between rounded-xl max-md:hidden"
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
                <p className="text-xs giliroy-700 text-white">{e.price} $</p>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <ul className="hidden max-md:flex flex-col items-center justify-between h-400 overflow-scroll rounded-xl w-2/3 max-sm:w-full">
          {foods.map((item) => {
            return (
              <li key={item.id} className="w-full flex items-center justify-between p-1 bg-newGray">
                <div className="flex items-center justify-between w-full gap-x-5 h-24">
                  <img src={item.img} className="w-1/2 h-full object-cover rounded-xl" alt="" />
                  <div className="w-1/2 flex justify-end flex-col gap-y-2">
                    <h2 className="giliroy-700 text-base text-white w-20 truncate">{item.name}</h2>
                    <div className="flex items-center justify-between w-full pr-2">
                      <button
                        id={item.id}
                        onClick={addToCart}
                        className="text-xs flex items-center justify-between text-white/50 giliroy-200 gap-x-1"
                      >
                        Добавить
                        <img
                          id={item.id}
                          className="w-5 h-5 p-1 bg-graygreen rounded-full"
                          src={plus}
                          alt="plus img"
                        />
                      </button>
                      <p className="text-xs giliroy-700 text-white">{item.price} $</p>
                    </div>
                  </div>
                </div>

              </li>
            )
          })}
        </ul>

        <ToastContainer />

        <div className="w-3/4 mb-20 bg-perfectGray py-5 px-10 rounded-xl flex items-center justify-between max-md:flex-col max-md:justify-center max-md:gap-y-5">
          <div className="flex flex-col items-start gap-y-2 max-md:items-center max-md:text-center max-md:gap-y-5">
            <p className="text-xl giliroy-200 text-white">
              <span className="text-sm text-white/50 giliroy-500">Итого: </span>
              {price} $
            </p>
            <p className="text-xs giliroy-200 text-white">
              До бесплатной доставки не хватет:{" "}
              <span className="text-graygreen">100 $</span>
            </p>
            <p className="text-xs giliroy-200 text-white">
              Минимальная сума заказа 150 $
            </p>
          </div>
          {price > 150 && (
            <Link
              to="/pay"
              className="text-sm giliroy-700 text-white px-5 py-3 bg-graygreen rounded-lg  max-md:w-full max-md:px-0 max-md:text-center"
            >
              Оформить заказ
            </Link>
          )}
          {price < 150 && (
            <Link
              onClick={error}
              className="text-sm giliroy-700 text-white px-5 py-3 bg-graygreen rounded-lg  max-md:w-full max-md:px-0 max-md:text-center"
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
