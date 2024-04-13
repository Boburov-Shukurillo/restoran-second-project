import React, { useState } from "react";
import arrow from "../assets/arrowLeft.png";
const DropDown = ({
  arr,
  name,
  imgUrl,
  borderColor,
  borderSize,
  selectColor,
  fontFamily,
  setReagin,
}) => {
  const [isOpen, setIsopen] = useState(false);
  const openDropDown = () => {
    setIsopen(true);
  };
  const closeDropDown = () => {
    setIsopen(false);
  };
  const [title, setTitle] = useState(name);
  return (
    <div
      onMouseEnter={openDropDown}
      onMouseLeave={closeDropDown}
      className={`relative  border-2 ${borderColor} rounded-lg text-whitenBlack`}
    >
      <div
        className={`w-full h-full flex items-center justify-between  p-5 py-3 text-white text-xl giliroy-200`}
      >
        <h1>{title}</h1>
        <img src={imgUrl} alt="arrow img" />
      </div>
      {isOpen && (
        <div
          className={`absolute w-full h-52 overflow-scroll ${selectColor} flex flex-col items-center justify-between  p-5 rounded-xl ${fontFamily} text-xl `}
        >
          {arr.map((item, index) => {
            return (
              <h3
                onClick={() =>
                  setTitle(item) || setReagin(item) || setIsopen(false)
                }
                className="cursor-pointer w-full hover:bg-focusGray/10 h-16 flex items-center justify-center"
                key={index}
              >
                {item}
              </h3>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
