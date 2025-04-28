import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { foods } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import minus from "../assets/minus.png";
import buy from "../assets/Buy.png";
import plus from "../assets/plus.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Map from "../components/Map";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const Home = ({ setCart, cart, data, setData }) => {
  const [swiper, setSwiper] = useState(4);
  setInterval(() => {
    if (window.innerWidth < 1200 && window.innerWidth > 780) {
      setSwiper(3)
    } else if (window.innerWidth < 780 && window.innerWidth > 580) {
      setSwiper(2)
    } else if (window.innerWidth < 580) {
      setSwiper(1)
    }
  }, 1);
  function addDotAfterThreeZeros(str) {
    if (typeof str !== 'string') {
      return "Invalid input: Input must be a string.";
    }

    return str.replace(/000/g, '000.');
  }
  return (
    <div>

      <div className="banner bg-contain bg-no-repeat max-1600:bg-cover">
        <div className="containerb  flex items-start justify-center h-full flex-col max-md:items-center max-md:gap-y-10">
          <h1 className="edit text-67 leading-tight relative font-semibold text-white/10 uppercase -rotate-[8deg] mb-20 ml-16 max-md:text-4xl max-md:text-center max-md:m-0">
            Доставка ВКУСНЕЙШИХ <br /> БЛЮд за 60 минут
            <span className="w-full edit2 absolute -top-2 left-2.5 text-67 leading-tight font-semibold text-white rustDemo uppercase max-md:text-4xl max-md:text-center">
              Доставка ВКУСНЕЙШИХ <br /> БЛЮд за 60 минут
            </span>
          </h1>
          <button className="ss w-64 h-12 flex ml-40 text-2xl text-white font-bold rustDemo tracking-widest max-md:text-2xl max-md:m-0"></button>
        </div>
      </div>

      <ToastContainer />
      <Navbar />

      <div className={`border-b-2 border-white/20 py-10`}>
        <div className="containerb overflow-hidden">
          <h1 className="text-white giliroy-700 text-3xl before:content-[''] before:w-1 before:h-10 before:bg-graygreen flex items-center gap-x-5 mb-12 max-md:text-xl">
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
                  className="text-white h-full relative bg-perfectGray flex flex-col items-start justify-between w-full rounded-xl"
                >
                  <Link to={`/foods/${item.id}`} className="w-full">
                    <img
                      src={item.img}
                      alt={item.name + "" + " img"}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                  </Link>
                  <div className="px-4 pb-4 pt-1 flex flex-col w-full h-full justify-between">
                    <div className="w-full flex justify-between flex-col gap-y-0.5">
                      <div className="flex items-center justify-between w-full">
                        <h2 className="giliroy-500 text-22 max-xl:text-xl max-md:text-base">{item.name}</h2>
                        <p className="giliroy-200 text-xs text-white/80">
                          Вес: {item.massa}г
                        </p>
                      </div>
                      <p className="text-13 giliroy-200 tracking-wider text-white/50 max-xl:text-xs max-xl:h-10 max-xl:truncate">
                        {item.description}
                      </p>
                    </div>
                    {!isBuy && (
                      <div className="flex items-center justify-between w-full">
                        <p>{item.price * item.food}$ ~ {item.price * 13000 * item.food}uzs</p>
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
                        <p>{item.price * item.food}$  ~ {item.price * 13000 * item.food}uzs</p>
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


      <div className="border-b-2 border-white/20 py-10">
        <div className="containerb overflow-hidden">
          <h1 className="text-white giliroy-700 text-3xl before:content-[''] before:w-1 before:h-10 before:bg-graygreen flex items-center gap-x-5 mb-12 max-md:text-xl">
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
                  <Link
                    to={`/foods/${item.id}`}
                    className="text-white h-full relative bg-perfectGray flex flex-col items-start justify-between w-full rounded-xl"
                  >
                    <img
                      src={item.img}
                      alt={item.name + "" + " img"}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
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
                        <p>{item.price * item.food}$ ~ {item.price * 13000 * item.food}uzs</p>
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
                        <p>{item.price * item.food}$ ~ {item.price * 13000 * item.food}uzs</p>
                        <button
                          onClick={() => addPr(item.id)}
                          className="w-16 h-12 flex items-center justify-center bg-graygreen rounded-xl shadow-xl shadow-graygreen/50"
                        >
                          <img src={plus} alt="plus" />
                        </button>
                      </div>
                    )}
                    {/* {isBuy && } */}
                  </div>{" "}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="py-10 mb-20">
        <div className="containerb overflow-hidden">
          <h1 className="text-white giliroy-700 text-3xl before:content-[''] before:w-1 before:h-10 before:bg-graygreen flex items-center gap-x-5 mb-12 max-md:text-xl">
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
                <SwiperSlide key={item.id} className="text-white h-full relative bg-perfectGray flex flex-col items-start justify-between w-full rounded-xl"
                >
                  <Link className="w-full"
                    to={`/foods/${item.id}`}
                  >
                    <img
                      src={item.img}
                      alt={item.name + "" + " img"}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
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
                        <p>{item.price * item.food}$ ~ {item.price * 13000 * item.food}uzs</p>
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
                        <p>{item.price * item.food}$ ~ {item.price * 13000 * item.food}uzs </p>
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

      <div className="relative  containerb max-md:hidden">
        <div className="hide h-[550px] overflow-hidden"><Map /></div>
        <div className="absolute -top-20 left-0 mb-20 chick rounded-xl z-40 flex items-center justify-between gap-x-20">
          <div className="w-1/2 h-full pl-24 py-16">
            <h1 className="text-4xl giliroy text-white mb-7">НАШЕ КАФЕ</h1>
            <p className="giliroy-200 w-full text-xl text-white mb-20">
              Мы расположены в одном из самых живописных мест города — на берегу
              реки, это ваш оазис в черте города, куда можно сбежать от шумного и
              пыльного мегаполиса. Мы, действительно уникальные, ведь все
              продумано до мелочей: проект построен из дикого закарпатского сруба,
              камин в основном зале ресторана и панорамные окна с видом на реку,
              уютные беседки на берегу реки и лучшая видовая террасса, шатер с
              посадкой на 200 человек, сказочный детский домик и бассейн.
            </p>

            <Link
              to="/menu"
              className="px-11 py-5 border-2 border-white/20 rounded-xl inline-block text-white bg-white/5 giliroy-500 text-13"
            >
              ПОСМОТРЕТЬ МЕНЮ
            </Link>
          </div>
          <div className="w-2/5 py-20 pr-20 grid grid-cols-2 grid-rows-2 gap-5">
            <div className="p-5 flex flex-col items-center justify-between bg-focusGray/70 backdrop-blur-md rounded-xl w-full item">
              <svg
                width="70"
                height="70"
                className="w-10/12 h-5/6 sa"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_31_48)">
                  <path
                    d="M29.5081 59.2603C27.9714 59.7961 26.3884 60.1358 24.7824 60.2816C25.9247 59.7146 27.0553 58.9836 28.1582 58.0892C28.5982 57.7325 28.6658 57.0866 28.3089 56.6465C27.9521 56.2065 27.3061 56.1391 26.8663 56.4958C24.0464 58.7823 21.5155 59.5849 19.4265 59.6738C21.0107 58.1924 22.9223 55.5022 25.1789 50.8863C25.4277 50.3772 25.2168 49.763 24.7079 49.5143C24.199 49.2658 23.5847 49.4764 23.3359 49.9853C19.9683 56.8736 17.3669 59.224 16.2695 59.2237C16.196 59.2237 16.1292 59.2132 16.0694 59.1928C15.7029 59.0676 15.469 58.4891 15.3622 58.1552C13.5679 52.5501 18.7645 32.8731 25.6338 23.29L30.2611 16.8348C30.5216 16.4711 30.7827 15.9503 30.9962 15.3687L31.1418 14.9717L31.2092 14.9946L31.0815 15.3977C30.8943 15.9885 30.7821 16.5601 30.7656 17.0074L30.4822 24.7492C30.4616 25.3154 30.9037 25.7911 31.4698 25.8119C31.4826 25.8123 31.4953 25.8126 31.5079 25.8126C32.0571 25.8126 32.512 25.3777 32.5322 24.8243L32.7729 18.2475L34.2028 22.3875C34.3494 22.812 34.7469 23.0787 35.1721 23.0787C35.2832 23.0787 35.3962 23.0605 35.5071 23.0222C36.0426 22.8373 36.3267 22.2534 36.1418 21.7179L36.0912 21.5716L36.0962 21.5801C36.3889 22.065 37.0191 22.2214 37.5043 21.9285C37.9894 21.6359 38.1455 21.0056 37.8528 20.5205L36.3782 18.0763C36.1057 17.6244 36.0228 17.0716 36.1511 16.5597L38.4701 7.29939C38.6258 6.67823 38.4809 6.03887 38.0728 5.54544C37.6647 5.052 37.0652 4.7897 36.4247 4.8258L30.9985 5.13242C30.2455 5.17509 29.5894 5.63064 29.2861 6.32142L26.275 13.1853C26.0632 13.6683 25.6596 14.0546 25.1675 14.2451L14.5453 18.3585C9.87264 20.168 6.05114 23.2666 3.49357 27.319C1.11913 31.0813 -0.0873689 35.4826 0.00439754 40.0473C0.096164 44.612 1.47868 48.9614 4.00246 52.625C6.72085 56.5714 10.6639 59.5137 15.4057 61.1339C17.9087 61.9892 20.4538 62.417 22.9709 62.4168C25.4242 62.4168 27.8509 62.0102 30.183 61.1971C30.7178 61.0105 31.0003 60.4256 30.8137 59.8907C30.6272 59.3559 30.0428 59.0734 29.5081 59.2603ZM31.1506 7.17877L36.4611 6.87872L34.6749 14.0113L29.0034 12.0734L31.1506 7.17877ZM5.69228 51.4616C3.39702 48.1296 2.13951 44.1683 2.05594 40.0063C1.97225 35.8442 3.06948 31.8358 5.22893 28.414C7.54976 24.7367 11.0276 21.921 15.2867 20.2718L23.2562 17.1856L18.9277 20.0198C15.6976 22.1349 12.8628 25.2847 10.7296 29.1286C8.7616 32.6749 7.42052 36.7237 6.85105 40.8378C6.77337 41.399 7.16532 41.9168 7.72645 41.9944C7.77418 42.0011 7.8215 42.0042 7.86841 42.0042C8.37251 42.0042 8.81206 41.6323 8.88318 41.1189C10.0162 32.932 14.2958 25.5047 20.0516 21.7359L27.9151 16.5869L23.9668 22.095C20.7157 26.6304 17.4683 33.9389 15.2802 41.6449C13.3751 48.3543 12.6051 54.1181 13.124 57.5207C12.101 56.6533 11.2323 55.5395 10.529 54.1819C9.29414 51.7987 8.6273 48.7449 8.60063 45.3505C8.59612 44.7841 8.1325 44.3242 7.56685 44.333C7.00039 44.3375 6.54484 44.8003 6.54922 45.3669C6.57766 48.9713 7.26639 52.1475 8.51556 54.7214C7.46059 53.7417 6.51311 52.6532 5.69228 51.4616Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M48.1502 21.4775C36.1021 21.4775 26.3002 31.2794 26.3002 43.3277C26.3002 55.3757 36.102 65.1776 48.1502 65.1776C60.1984 65.1776 70.0002 55.3757 70.0002 43.3277C70 31.2794 60.1982 21.4775 48.1502 21.4775ZM48.1502 63.1261C37.2333 63.1261 28.3516 54.2446 28.3516 43.3275C28.3516 32.4105 37.2331 23.5288 48.1502 23.5288C59.0672 23.5288 67.9487 32.4105 67.9487 43.3275C67.9487 54.2446 59.0671 63.1261 48.1502 63.1261Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M48.1502 25.6079C38.3796 25.6079 30.4306 33.5569 30.4306 43.3274C30.4306 53.0979 38.3796 61.0468 48.1502 61.0468C57.9208 61.0468 65.8698 53.0979 65.8698 43.3274C65.8698 33.5569 57.9208 25.6079 48.1502 25.6079ZM48.1502 58.9956C39.5107 58.9956 32.482 51.9669 32.482 43.3276C32.482 34.6883 39.5107 27.6595 48.1502 27.6595C56.7896 27.6595 63.8184 34.6883 63.8184 43.3276C63.8184 51.9669 56.7896 58.9956 48.1502 58.9956Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M48.1502 30.635C41.1515 30.635 35.4577 36.3289 35.4577 43.3276C35.4577 50.3262 41.1515 56.0201 48.1502 56.0201C52.843 56.0201 57.1358 53.4399 59.3532 49.2863C59.6201 48.7866 59.4312 48.1653 58.9315 47.8984C58.4316 47.6315 57.8103 47.8205 57.5436 48.3202C55.6835 51.8045 52.0843 53.9689 48.1502 53.9689C42.2828 53.9689 37.5091 49.1954 37.5091 43.3278C37.5091 37.4602 42.2828 32.6866 48.1502 32.6866C54.0178 32.6866 58.7914 37.4602 58.7914 43.3278C58.7914 43.7019 58.7702 44.0882 58.7285 44.4752C58.6678 45.0384 59.0752 45.5441 59.6384 45.605C60.2013 45.6658 60.7073 45.2583 60.7682 44.6951C60.8177 44.2353 60.8428 43.7753 60.8428 43.3279C60.8427 36.3289 55.1488 30.635 48.1502 30.635Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M40.7703 43.3276C40.7703 47.3969 44.0809 50.7075 48.1502 50.7075C52.2195 50.7075 55.5301 47.3969 55.5301 43.3276C55.5301 39.2583 52.2194 35.9478 48.1502 35.9478C44.081 35.9478 40.7703 39.2583 40.7703 43.3276ZM53.4787 43.3276C53.4787 46.2657 51.0882 48.6561 48.1502 48.6561C45.2122 48.6561 42.8217 46.2657 42.8217 43.3276C42.8217 40.3896 45.212 37.9992 48.1502 37.9992C51.0884 37.9992 53.4787 40.3895 53.4787 43.3276Z"
                    fill="currentColor"
                    className="salom"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_31_48">
                    <rect
                      width="70"
                      height="70"
                      fill="currentColor"
                      className="salom"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-lg giliroy-200">Свежайшие продукты</span>
            </div>
            <div className="p-5 flex flex-col items-center justify-between bg-focusGray/70 backdrop-blur-md rounded-xl w-full item">
              <svg
                className="sa w-10/12 h-5/6"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.6953 24.7266H33.1389L45.7077 2.62665C46.0172 2.08283 46.0135 1.41495 45.699 0.873872C45.3845 0.332795 44.8055 0 44.1797 0H23.0859C22.3288 0 21.6563 0.48523 21.4178 1.20392L10.8709 32.9613C10.6929 33.4974 10.783 34.086 11.1136 34.5443C11.4441 35.002 11.9742 35.2735 12.539 35.2735H27.4562L17.9535 57.5524C17.6152 58.3457 17.9017 59.2667 18.6305 59.7277C19.3593 60.1887 20.3146 60.0527 20.8864 59.4077L49.0114 27.6499C50.013 26.5183 49.2082 24.7266 47.6953 24.7266ZM25.4388 48.9647L31.734 34.2055C32.2275 33.0483 31.3779 31.7578 30.1172 31.7578H14.9748L24.3544 3.51563H41.1575L28.5892 25.6151C27.9245 26.7838 28.7691 28.2422 30.1172 28.2422H43.7906L25.4388 48.9647Z"
                  className="salom"
                  fill="currentColor"
                />
              </svg>
              <span className="text-lg giliroy-200">Быстрая доставка</span>
            </div>

            <div className="p-5 flex flex-col items-center justify-between bg-focusGray/70 backdrop-blur-md rounded-xl w-full item">
              <svg
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
                className="w-10/12 h-5/6 sa"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_31_25)">
                  <path
                    d="M16.6364 29.1137C16.6364 28.3474 16.0163 27.7273 15.25 27.7273C14.4837 27.7273 13.8636 28.3474 13.8636 29.1137C13.8636 32.7542 17.8792 37.7528 18.3368 38.3119C18.6117 38.645 19.0097 38.8183 19.4104 38.8183C19.719 38.8183 20.0305 38.7153 20.289 38.5041C20.8806 38.018 20.9659 37.1449 20.4812 36.5518C18.9948 34.7404 16.6364 31.1201 16.6364 29.1137Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M45.75 27.7273C44.9837 27.7273 44.3636 28.3474 44.3636 29.1137C44.3636 31.1133 42.0051 34.7377 40.5186 36.5533C40.034 37.1449 40.1205 38.0182 40.7123 38.5041C40.9695 38.7153 41.2809 38.8183 41.5909 38.8183C41.9916 38.8183 42.3883 38.645 42.6632 38.3119C43.1208 37.7528 47.1364 32.7543 47.1364 29.1137C47.1364 28.3474 46.5163 27.7273 45.75 27.7273Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M30.5001 27.7273C29.7337 27.7273 29.1136 28.3474 29.1136 29.1137V37.4319C29.1136 38.1982 29.7337 38.8183 30.5001 38.8183C31.2664 38.8183 31.8865 38.1982 31.8865 37.4319V29.1137C31.8863 28.3474 31.2662 27.7273 30.5001 27.7273Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M45.75 5.5455C44.9099 5.5455 44.0319 5.65663 43.1202 5.82598C40.0668 2.26658 35.5467 0 30.5001 0C25.4534 0 20.9332 2.26658 17.8799 5.82585C16.9681 5.65663 16.0901 5.54537 15.2501 5.54537C6.84106 5.5455 0 12.3866 0 20.7955C0 26.5575 3.24929 31.7956 8.35068 34.3856L8.32365 55.3367C8.32235 56.849 8.90982 58.2706 9.97806 59.3401C11.0476 60.4111 12.4678 61 13.9801 61H47.0254C50.1448 61 52.6819 58.4628 52.6819 55.3435V34.3653C57.7644 31.7686 61.0001 26.5385 61.0001 20.7955C61 12.3866 54.1589 5.5455 45.75 5.5455ZM49.9091 55.3436C49.9091 56.9331 48.6149 58.2274 47.0253 58.2274H13.98C13.2097 58.2274 12.4853 57.9268 11.9397 57.3813C11.3954 56.8357 11.0949 56.1114 11.0962 55.3397L11.1035 49.9091H49.9091V55.3436ZM50.7675 32.2072C50.6943 32.237 50.6253 32.2722 50.5603 32.3142C50.3856 32.4225 50.2421 32.5661 50.1351 32.7312C50.0269 32.8949 49.9537 33.0846 49.9239 33.2876C49.9117 33.3648 49.9077 33.442 49.909 33.5205V47.1363H11.107L11.1248 33.5393C11.1261 33.4635 11.1221 33.3863 11.1113 33.3119C11.0815 33.102 11.0043 32.907 10.8919 32.7378C10.7862 32.5794 10.6482 32.4413 10.4803 32.3357C10.4113 32.2924 10.3381 32.2544 10.2623 32.2232C5.712 30.2334 2.77269 25.7519 2.77269 20.7955C2.77269 13.915 8.36966 8.31819 15.25 8.31819C15.5189 8.31819 15.8027 8.35068 16.0813 8.37265C14.6786 10.8104 13.8636 13.6274 13.8636 16.6364C13.8636 17.4027 14.4837 18.0228 15.25 18.0228C16.0163 18.0228 16.6364 17.4027 16.6364 16.6364C16.6364 8.99235 22.856 2.77269 30.5001 2.77269C38.1441 2.77269 44.3636 8.99235 44.3636 16.6364C44.3636 17.4027 44.9837 18.0228 45.75 18.0228C46.5163 18.0228 47.1364 17.4027 47.1364 16.6364C47.1364 13.6274 46.3214 10.8105 44.9187 8.37265C45.1973 8.35068 45.4811 8.31819 45.75 8.31819C52.6305 8.31819 58.2273 13.9152 58.2273 20.7955C58.2273 25.7344 55.3002 30.2102 50.7675 32.2072Z"
                    fill="currentColor"
                    className="salom"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_31_25">
                    <rect
                      width="61"
                      height="61"
                      fill="currentColor"
                      className="salom"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-lg giliroy-200">Лучшие повора</span>
            </div>
            <div className="p-5 flex flex-col items-center justify-between bg-focusGray/70 backdrop-blur-md rounded-xl w-full item">
              <svg
                width="70"
                height="70"
                className="w-full h-full sa"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_31_48)">
                  <path
                    d="M29.5081 59.2603C27.9714 59.7961 26.3884 60.1358 24.7824 60.2816C25.9247 59.7146 27.0553 58.9836 28.1582 58.0892C28.5982 57.7325 28.6658 57.0866 28.3089 56.6465C27.9521 56.2065 27.3061 56.1391 26.8663 56.4958C24.0464 58.7823 21.5155 59.5849 19.4265 59.6738C21.0107 58.1924 22.9223 55.5022 25.1789 50.8863C25.4277 50.3772 25.2168 49.763 24.7079 49.5143C24.199 49.2658 23.5847 49.4764 23.3359 49.9853C19.9683 56.8736 17.3669 59.224 16.2695 59.2237C16.196 59.2237 16.1292 59.2132 16.0694 59.1928C15.7029 59.0676 15.469 58.4891 15.3622 58.1552C13.5679 52.5501 18.7645 32.8731 25.6338 23.29L30.2611 16.8348C30.5216 16.4711 30.7827 15.9503 30.9962 15.3687L31.1418 14.9717L31.2092 14.9946L31.0815 15.3977C30.8943 15.9885 30.7821 16.5601 30.7656 17.0074L30.4822 24.7492C30.4616 25.3154 30.9037 25.7911 31.4698 25.8119C31.4826 25.8123 31.4953 25.8126 31.5079 25.8126C32.0571 25.8126 32.512 25.3777 32.5322 24.8243L32.7729 18.2475L34.2028 22.3875C34.3494 22.812 34.7469 23.0787 35.1721 23.0787C35.2832 23.0787 35.3962 23.0605 35.5071 23.0222C36.0426 22.8373 36.3267 22.2534 36.1418 21.7179L36.0912 21.5716L36.0962 21.5801C36.3889 22.065 37.0191 22.2214 37.5043 21.9285C37.9894 21.6359 38.1455 21.0056 37.8528 20.5205L36.3782 18.0763C36.1057 17.6244 36.0228 17.0716 36.1511 16.5597L38.4701 7.29939C38.6258 6.67823 38.4809 6.03887 38.0728 5.54544C37.6647 5.052 37.0652 4.7897 36.4247 4.8258L30.9985 5.13242C30.2455 5.17509 29.5894 5.63064 29.2861 6.32142L26.275 13.1853C26.0632 13.6683 25.6596 14.0546 25.1675 14.2451L14.5453 18.3585C9.87264 20.168 6.05114 23.2666 3.49357 27.319C1.11913 31.0813 -0.0873689 35.4826 0.00439754 40.0473C0.096164 44.612 1.47868 48.9614 4.00246 52.625C6.72085 56.5714 10.6639 59.5137 15.4057 61.1339C17.9087 61.9892 20.4538 62.417 22.9709 62.4168C25.4242 62.4168 27.8509 62.0102 30.183 61.1971C30.7178 61.0105 31.0003 60.4256 30.8137 59.8907C30.6272 59.3559 30.0428 59.0734 29.5081 59.2603ZM31.1506 7.17877L36.4611 6.87872L34.6749 14.0113L29.0034 12.0734L31.1506 7.17877ZM5.69228 51.4616C3.39702 48.1296 2.13951 44.1683 2.05594 40.0063C1.97225 35.8442 3.06948 31.8358 5.22893 28.414C7.54976 24.7367 11.0276 21.921 15.2867 20.2718L23.2562 17.1856L18.9277 20.0198C15.6976 22.1349 12.8628 25.2847 10.7296 29.1286C8.7616 32.6749 7.42052 36.7237 6.85105 40.8378C6.77337 41.399 7.16532 41.9168 7.72645 41.9944C7.77418 42.0011 7.8215 42.0042 7.86841 42.0042C8.37251 42.0042 8.81206 41.6323 8.88318 41.1189C10.0162 32.932 14.2958 25.5047 20.0516 21.7359L27.9151 16.5869L23.9668 22.095C20.7157 26.6304 17.4683 33.9389 15.2802 41.6449C13.3751 48.3543 12.6051 54.1181 13.124 57.5207C12.101 56.6533 11.2323 55.5395 10.529 54.1819C9.29414 51.7987 8.6273 48.7449 8.60063 45.3505C8.59612 44.7841 8.1325 44.3242 7.56685 44.333C7.00039 44.3375 6.54484 44.8003 6.54922 45.3669C6.57766 48.9713 7.26639 52.1475 8.51556 54.7214C7.46059 53.7417 6.51311 52.6532 5.69228 51.4616Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M48.1502 21.4775C36.1021 21.4775 26.3002 31.2794 26.3002 43.3277C26.3002 55.3757 36.102 65.1776 48.1502 65.1776C60.1984 65.1776 70.0002 55.3757 70.0002 43.3277C70 31.2794 60.1982 21.4775 48.1502 21.4775ZM48.1502 63.1261C37.2333 63.1261 28.3516 54.2446 28.3516 43.3275C28.3516 32.4105 37.2331 23.5288 48.1502 23.5288C59.0672 23.5288 67.9487 32.4105 67.9487 43.3275C67.9487 54.2446 59.0671 63.1261 48.1502 63.1261Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M48.1502 25.6079C38.3796 25.6079 30.4306 33.5569 30.4306 43.3274C30.4306 53.0979 38.3796 61.0468 48.1502 61.0468C57.9208 61.0468 65.8698 53.0979 65.8698 43.3274C65.8698 33.5569 57.9208 25.6079 48.1502 25.6079ZM48.1502 58.9956C39.5107 58.9956 32.482 51.9669 32.482 43.3276C32.482 34.6883 39.5107 27.6595 48.1502 27.6595C56.7896 27.6595 63.8184 34.6883 63.8184 43.3276C63.8184 51.9669 56.7896 58.9956 48.1502 58.9956Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M48.1502 30.635C41.1515 30.635 35.4577 36.3289 35.4577 43.3276C35.4577 50.3262 41.1515 56.0201 48.1502 56.0201C52.843 56.0201 57.1358 53.4399 59.3532 49.2863C59.6201 48.7866 59.4312 48.1653 58.9315 47.8984C58.4316 47.6315 57.8103 47.8205 57.5436 48.3202C55.6835 51.8045 52.0843 53.9689 48.1502 53.9689C42.2828 53.9689 37.5091 49.1954 37.5091 43.3278C37.5091 37.4602 42.2828 32.6866 48.1502 32.6866C54.0178 32.6866 58.7914 37.4602 58.7914 43.3278C58.7914 43.7019 58.7702 44.0882 58.7285 44.4752C58.6678 45.0384 59.0752 45.5441 59.6384 45.605C60.2013 45.6658 60.7073 45.2583 60.7682 44.6951C60.8177 44.2353 60.8428 43.7753 60.8428 43.3279C60.8427 36.3289 55.1488 30.635 48.1502 30.635Z"
                    fill="currentColor"
                    className="salom"
                  />
                  <path
                    d="M40.7703 43.3276C40.7703 47.3969 44.0809 50.7075 48.1502 50.7075C52.2195 50.7075 55.5301 47.3969 55.5301 43.3276C55.5301 39.2583 52.2194 35.9478 48.1502 35.9478C44.081 35.9478 40.7703 39.2583 40.7703 43.3276ZM53.4787 43.3276C53.4787 46.2657 51.0882 48.6561 48.1502 48.6561C45.2122 48.6561 42.8217 46.2657 42.8217 43.3276C42.8217 40.3896 45.212 37.9992 48.1502 37.9992C51.0884 37.9992 53.4787 40.3895 53.4787 43.3276Z"
                    fill="currentColor"
                    className="salom"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_31_48">
                    <rect
                      width="70"
                      height="70"
                      fill="currentColor"
                      className="salom"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-lg giliroy-200">Свежайшие продукты</span>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Home;
