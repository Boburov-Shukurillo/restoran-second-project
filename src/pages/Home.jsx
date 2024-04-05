import React from "react";
import Navbar from "../components/Navbar";
import { foods } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

import minus from "../assets/minus.png";
import buy from "../assets/Buy.png";
import plus from "../assets/plus.png";
const Home = () => {
  return (
    <div>
      <div className="banner bg-contain max-1600:bg-cover">
        <div className="containerb  flex items-start justify-center h-full flex-col ">
          <h1 className="edit text-67 leading-tight relative font-semibold text-focusGray uppercase -rotate-[8deg] mb-20 ml-16">
            Доставка ВКУСНЕЙШИХ <br /> БЛЮд за 60 минут
            <span className="w-full edit2 absolute -top-2 left-2.5 text-67 leading-tight font-semibold text-white rustDemo uppercase">
              Доставка ВКУСНЕЙШИХ <br /> БЛЮд за 60 минут
            </span>
          </h1>
          <button className="ss w-64 h-12 flex ml-40 text-2xl text-white font-bold rustDemo tracking-widest"></button>
        </div>
      </div>

      <Navbar />
      <div className="border-b-2 border-b-perfectGray py-10">
        <div className="containerb" id="coldFood">
          <h1 className="text-3xl flex items-center giliroy-700 text-white before:content-[''] before:w-1 before:h-10 before:bg-graygreen before:mr-5 mb-14">
            ХОЛОДНЫЕ ЗАКУСКИ
          </h1>
          <Swiper slidesPerView={4} spaceBetween={16} className="classicSwiper">
            <ul>
              {foods.map((game) => {
                return (
                  <li key={game.id}>
                    <SwiperSlide
                      key={game.id}
                      className="hover:shadow-lg hover:shadow-[#494544] rounded-xl overflow-hidden flex flex-col justify-start items-center text-center bg-[#494544] transition-all"
                    >
                      <img
                        src={game.img}
                        className="w-full h-52 object-cover mb-5"
                        alt={game.projectName + " "}
                      />
                      <div className="px-4 flex flex-col items-start justify-between h-full pb-5 w-full">
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-0.5 w-full">
                            <h3 className="text-22 font-bold text-white giliroy">
                              {game.name}
                            </h3>
                            <p className="giliroy-200 text-white text-xs">
                              Вес: {game.massa}
                            </p>
                          </div>
                          <p className="text-gray text-start giliroy-200 text-13 mb-4">
                            {game.desctiption}
                          </p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                          <p className="font-semibold text-white giliroy-700">
                            {game.price}₽
                          </p>
                          <button className="px-5 h-12 butonShadow py-2 bg-graygreen rounded-xl flex items-center gap-x-5 text-white giliroy-500 justify-between ">
                            В корзину <img src={buy} alt="buy icon" />
                          </button>
                        </div>
                        {/* <div className="flex justify-between w-4/5 gap-x-7 mb-3">
                        <button className="px-7 h-12 butonShadow py-2 bg-graygreen rounded-xl">
                          <img src={minus} alt="" />
                        </button>
                        <button className="px-7 h-12 butonShadow py-2 bg-graygreen rounded-xl">
                          <img src={plus} alt="" />
                        </button>
                      </div> */}
                      </div>
                    </SwiperSlide>
                  </li>
                );
              })}
            </ul>
          </Swiper>
        </div>
      </div>

      <div className="border-b-2 border-b-perfectGray py-10">
        <div className="containerb" id="coldFood">
          <h1 className="text-3xl flex items-center giliroy-700 text-white before:content-[''] before:w-1 before:h-10 before:bg-graygreen before:mr-5 mb-14">
            ГОРЯЧИЕ ЗАКУСКИ
          </h1>
          <Swiper slidesPerView={4} spaceBetween={16} className="classicSwiper">
            <ul>
              {foods.map((game) => {
                return (
                  <li key={game.id}>
                    <SwiperSlide
                      key={game.id}
                      className="hover:shadow-lg hover:shadow-[#494544] rounded-xl overflow-hidden flex flex-col justify-start items-center text-center bg-[#494544] transition-all"
                    >
                      <img
                        src={game.img}
                        className="w-full h-52 object-cover mb-5"
                        alt={game.projectName + " "}
                      />
                      <div className="px-4 flex flex-col items-start justify-between h-full pb-5 w-full">
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-0.5 w-full">
                            <h3 className="text-22 font-bold text-white giliroy">
                              {game.name}
                            </h3>
                            <p className="giliroy-200 text-white text-xs">
                              Вес: {game.massa}
                            </p>
                          </div>
                          <p className="text-gray text-start giliroy-200 text-13 mb-4">
                            {game.desctiption}
                          </p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                          <p className="font-semibold text-white giliroy-700">
                            {game.price}₽
                          </p>
                          <button className="px-5 h-12 butonShadow py-2 bg-graygreen rounded-xl flex items-center gap-x-5 text-white giliroy-500 justify-between ">
                            В корзину <img src={buy} alt="buy icon" />
                          </button>
                        </div>
                        {/* <div className="flex justify-between w-4/5 gap-x-7 mb-3">
                        <button className="px-7 h-12 butonShadow py-2 bg-graygreen rounded-xl">
                          <img src={minus} alt="" />
                        </button>
                        <button className="px-7 h-12 butonShadow py-2 bg-graygreen rounded-xl">
                          <img src={plus} alt="" />
                        </button>
                      </div> */}
                      </div>
                    </SwiperSlide>
                  </li>
                );
              })}
            </ul>
          </Swiper>
        </div>
      </div>

      <div className="border-b-2 border-b-perfectGray py-10">
        <div className="containerb" id="coldFood">
          <h1 className="text-3xl flex items-center giliroy-700 text-white before:content-[''] before:w-1 before:h-10 before:bg-graygreen before:mr-5 mb-14">
            Мясные блюда
          </h1>
          <Swiper slidesPerView={4} spaceBetween={16} className="classicSwiper">
            <ul>
              {foods.map((game) => {
                return (
                  <li key={game.id}>
                    <SwiperSlide
                      key={game.id}
                      className="hover:shadow-lg hover:shadow-[#494544] rounded-xl overflow-hidden flex flex-col justify-start items-center text-center bg-[#494544] transition-all"
                    >
                      <img
                        src={game.img}
                        className="w-full h-52 object-cover mb-5"
                        alt={game.projectName + " "}
                      />
                      <div className="px-4 flex flex-col items-start justify-between h-full pb-5 w-full">
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-0.5 w-full">
                            <h3 className="text-22 font-bold text-white giliroy">
                              {game.name}
                            </h3>
                            <p className="giliroy-200 text-white text-xs">
                              Вес: {game.massa}
                            </p>
                          </div>
                          <p className="text-gray text-start giliroy-200 text-13 mb-4">
                            {game.desctiption}
                          </p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                          <p className="font-semibold text-white giliroy-700">
                            {game.price}₽
                          </p>
                          <button className="px-5 h-12 butonShadow py-2 bg-graygreen rounded-xl flex items-center gap-x-5 text-white giliroy-500 justify-between ">
                            В корзину <img src={buy} alt="buy icon" />
                          </button>
                        </div>
                        {/* <div className="flex justify-between w-4/5 gap-x-7 mb-3">
                        <button className="px-7 h-12 butonShadow py-2 bg-graygreen rounded-xl">
                          <img src={minus} alt="" />
                        </button>
                        <button className="px-7 h-12 butonShadow py-2 bg-graygreen rounded-xl">
                          <img src={plus} alt="" />
                        </button>
                      </div> */}
                      </div>
                    </SwiperSlide>
                  </li>
                );
              })}
            </ul>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
