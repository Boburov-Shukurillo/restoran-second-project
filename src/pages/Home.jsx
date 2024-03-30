import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="banner bg-contain max-1600:bg-cover">
        <div className="containerb  flex items-start justify-center h-full flex-col">
          <h1 className="edit text-67 leading-tight relative font-semibold text-gray uppercase -rotate-6">
            Доставка ВКУСНЕЙШИХ <br /> БЛЮд за 60 минут
            <h1 className="w-full edit2 absolute -top-2 left-2 text-67 leading-tight font-semibold text-white rustDemo uppercase">
              Доставка ВКУСНЕЙШИХ <br /> БЛЮд за 60 минут
            </h1>
          </h1>
          <button>Ещё не пробовал?</button>
        </div>
      </div>

      <Navbar />
      <div className="containerb"></div>
    </>
  );
};

export default Home;
