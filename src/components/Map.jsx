import React from "react";
import message from "../assets/message.png";
import location from "../assets/location.png";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import vkontakte from "../assets/vkontakte.svg";
import ourLocation from '../assets/ourLocation.png'
import { MapContainer, TileLayer, Marker, Popup } from 'leaflet'
const Map = () => {
  return (
    <div className="mapBg bg-contain bg-no-repeat bg-center max-xl:bg-cover ">
      <div className="containerb relative  p-10 pt-40 max-md:pt-20 max-md:pb-56">

        <div className="w-1/2 bg-[#2E2B2C] p-20 rounded-2xl max-md:w-2/3 max-400:p-10 max-400:w-full">

          <h1 className="text-white giliroy-700 text-3xl mb-5 max-md:text-center">КОНТАКТЫ</h1>
          <div className="w-full h-0.5 gradient mb-5"></div>
          <div className="flex items-start justify-between gap-x-2.5 mb-5">
            <img className="w-10 max-md:w-5" src={location} alt="location img" />
            <address className="text-white text-lg giliroy-200 tracking-wider not-italic">
              <span className="text-white/30 text-lg giliroy-200 h-5 flex items-center justify-start leading-[0px] max-md:text-xs">
                Наш адрес:
              </span>
              <p className="max-md:text-xs">
                МО, городской округ Красногорск, село Ильинкое, Экспериментальная
                улица, 10
              </p>
            </address>
          </div>

          <div className="flex items-start gap-x-5 mb-5 ">
            <img className="w-9 max-md:w-5" src={message} alt="" />
            <p className="flex flex-col justify-between text-white giliroy-700 max-md:text-xs">
              <span className="text-white/30 text-lg giliroy-200 inline-block max-md:text-xs">
                Наша почта:
              </span>
              auto.wash@gmail.com
            </p>
          </div>
          <div className="w-full h-0.5 gradient leading-[0px] mb-9"></div>
          <div className="flex items-end justify-between mb-5 max-md:flex-col max-md:items-start max-400:items-center max-md:mb-2 max-md:gap-5">
            <a
              href="#"
              className="inline-block px-7 py-5 rounded-lg bg-graygreen text-white giliroy-700 tracking-widest text-13 max-md:p-0 max-md:w-full max-md:h-16 max-md:flex items-center justify-center"
            >
              ЗАБРОНИРОВАТЬ СТОЛ
            </a>
            <p className="flex items-start justify-between flex-col text-white giliroy-700 text-2xl leading-7 max-md:text-xl max-400:items-center max-400:w-full">
            <span className="giliroy"> +998 (93) 510-57-59</span>
              <span className="text-13 giliroy-200 tracking-wider text-gray max-md:text-center">
                Звоните или оставляйте заявку
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-5 max-md:justify-start max-md:flex-col max-md:gap-5">
            <p className="text-base giliroy-700 text-white">Мы в соц сетях:</p>
            <div className="flex items-center gap-x-2.5">
              <img src={facebook} alt="facebook img" />
              <img src={vkontakte} alt="vkontakte img" />
              <img src={instagram} alt="instagram img" />
              <img src={youtube} alt="youtube img" />
            </div>
          </div>
        </div>
        <img src={ourLocation} className="absolute bottom-32 right-72 w-20" alt="" />
      </div>
    </div>
  );
};

export default Map;
