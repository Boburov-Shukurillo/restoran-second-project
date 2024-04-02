import React from "react";
import Navbar from "../components/Navbar";
import { foods } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
const Home = () => {
  return (
    <>
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

      <Swiper slidesPerView={4} spaceBetween={20} className="classicSwiper">
        <ul>
          {foods.map((game) => {
            return (
              <li key={game.id}>
                <SwiperSlide
                  key={game.id}
                  className="rounded-xl overflow-hidden border-2  flex flex-col justify-between items-center text-center bg-[#494544]   transition-all"
                >
                  <img
                    src={game.img}
                    className="w-full h-1/2 object-cover"
                    alt={game.projectName + " "}
                  />
                  <div className="flex items-center justify-between w-4/5">
                    <h3 className="text-2xl font-bold">{game.name}</h3>
                    <p className=" font-semibold">{game.massa}</p>
                  </div>
                  <p className=" font-semibold">{game.desctiption}</p>
                  <p className=" font-semibold">{game.price}</p>
                  <div className="flex justify-between w-4/5 gap-x-7 mb-10">
                    <button className="px-10 shadow-xl shadow-graygreen py-2 bg-graygreen rounded-xl">-</button>
                    <button className="px-10 shadow-xl shadow-graygreen py-2 bg-graygreen rounded-xl">+</button>
                  </div>
                </SwiperSlide>
              </li>
            );
          })}
        </ul>
      </Swiper>
      <div className="containerb"></div>
    </>
  );
};

export default Home;
