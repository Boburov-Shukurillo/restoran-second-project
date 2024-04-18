import React, { useState } from "react";
import Navbar from "../components/Navbar";
import arrow from "../assets/arrowLeft.png";
import { Link } from "react-router-dom";
import clock from "../assets/clock.svg";
import dropdownIcon from "../assets/dropdown.png";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import DropDown from "../components/DropDown";
import night from "../assets/night.png";
import { ToastContainer, toast } from "react-toastify";
const Pay = () => {
  const [regionChange, setReagin] = useState("");
  const payArr = ["Самовывоз", "Доставка"];
  const oplata = ["Оплата онлайн", "Курьеру картой", "Наличными"];
  const [pay, setPay] = useState(1);
  const [payType, setPayType] = useState(1);
  const [foodTime, setFoodTime] = useState(2);
  const [person, setPerson] = useState(1);
  const [changeContact, setChangeContact] = useState(1);
  const [inputName, setInputName] = useState("");
  const [inputTelefon, setInputTelefon] = useState("");
  const [inputHome, setInputHome] = useState("");
  const [inputHomeNumber, setInputHomeNumber] = useState("");
  const [inputKvartira, setInputKvartira] = useState("");
  const [inputPodez, setInputPodez] = useState("");
  const [inputEtaj, setInputEtaj] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [date, setDate] = useState("");
  let region = ["russia", "usa", "uzb"];
  const ourdate = new Date();
  const getZakaz = () => {
    if (inputName.trim() === "" || inputTelefon.trim() === "") {
      toast.error("Error", {
        position: "bottom-right",
        autoClose: 500,
      });
    } else if (pay === 1) {
      if (
        inputHome.trim() === "" ||
        inputHomeNumber.trim() === "" ||
        inputKvartira.trim() === "" ||
        inputPodez.trim() === "" ||
        inputEtaj.trim() === ""
      ) {
        toast.error("inputlar bo'sh bo'lmasligi kerak", {
          position: "bottom-right",
          autoClose: 500,
        });
      }
    } else if (pay === 2) {
      if (regionChange.trim() === "") {

        toast.error("inputlar bo'sh bo'lmasligi kerak 2", {
          position: "bottom-right",
          autoClose: 500,
        });
      }
      if (date.toString().trim() === "" || ourdate.getFullYear() >= +date.slice(0, 4)) {
        if (ourdate.getMonth() + 1 >= +date.slice(5, 7)) {
          if (ourdate.getDate() >= +date.slice(8, 10)) {
            toast.error("Sanadan Hatolik", {
              position: "bottom-right",
              autoClose: 500,
            });
          } else {
            toast.success("Sotuv Amalga oshirildi", {
              position: "bottom-right",
              autoClose: 500,
            });
          }
        }
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-perfectGray to-darkenBlack">
      <ToastContainer />
      <div className="containerb flex items-center justify-center text-white giliroy-200">
        <div className="w-3/4 py-12 max-md:w-full">
          {ourdate.getHours() >= 11 && (
            <div className="w-full p-10 mb-10 bg-[#2B2829] rounded-xl flex ic justify-between max-md:flex-col">
              <div className="flex items-start flex-col justify-center max-sm:text-center mb-5">
                <h1 className="text-22 giliroy-700">
                  Сегодня мы уже не доставляем.
                </h1>
                <p className="text-lg giliroy-200">
                  Заказы принимаем до 20:50, доставляем с 8:30 до 21:30
                </p>
              </div>
              <img src={night} alt="night img" />
              <Link className="text-xs w-full h-10 hidden max-md:flex items-center justify-center bg-graygreen rounded-md">Продолжить оформлять заказ</Link>
            </div>
          )}

          <Link
            to="/korzinka"
            className="mb-8 text-xl text-white flex flex-row items-start gap-x-2 leading-3"
          >
            <img src={arrow} className="h-4" alt="" />в корзину
          </Link>
          <h1 className="text-3xl mb-14 text-white giliroy-700 before:content-[''] before:h-8 before:w-1 before:mr-5 before:bg-graygreen flex items-center">
            Оформление заказа
          </h1>

          <div className="w-full bg-perfectGray rounded-xl p-10 pb-20 mb-5">
            <h1 className="text-lg text-white giliroy-700 mb-8">
              1. Контактная информация
            </h1>
            <div className="w-full flex items-center justify-between gap-5 max-md:flex-col">
              <input
                className="w-full py-5 px-10 rounded-xl bg-transparent border-2 border-focusGray"
                type="text"
                placeholder="Имя*"
                onChange={(e) => setInputName(e.target.value)}
                value={inputName}
              />
              <input
                className="w-full py-5 px-10 rounded-xl bg-transparent border-2 border-focusGray"
                type="tel"
                placeholder="Телефон*"
                onChange={(e) => setInputTelefon(e.target.value)}
                value={inputTelefon}
              />
            </div>
          </div>

          <div className="p-10 bg-perfectGray rounded-xl mb-5 max-md:p-5">
            <h1 className="text-lg text-white giliroy-700 mb-8">2. Доставка</h1>
            <div className="w-full flex items-center justify-start gap-x-10 mb-10 ">
              <div className="w-1/2 flex items-center justify-between max-md:w-full">
                <p
                  onClick={() => setPay(1)}
                  id="1"
                  className={`${pay === 1 ? "bg-graygreen" : "bg-transparent"
                    } border-2 border-graygreen cursor-pointer w-full h-full py-5 px-14 max-md:p-0 max-md:w-full max-md:flex items-center justify-center max-md:h-14 rounded-l-xl text-base giliroy-500 text-white`}
                >
                  Самовывоз
                </p>
                <p
                  onClick={() => setPay(2)}
                  className={`${pay === 2 ? "bg-graygreen" : "bg-transparent"
                    } border-2 border-graygreen cursor-pointer border-l-0 w-full h-full py-5 px-14 max-md:p-0 max-md:w-full max-md:flex items-center justify-center max-md:h-14 rounded-r-xl text-base giliroy-500 text-white`}
                >
                  Доставка
                </p>
              </div>
              <p className="flex items-center text-base text-white giliroy-500 gap-x-2.5 justify-between max-md:hidden">
                <img src={clock} alt="" /> Доставим через 1 час 30 минут
              </p>
            </div>
            {pay === 1 && (
              <div className="mb-8 giliroy-200 text-base">
                <h2 className="text-lg text-white giliroy-700 mb-5">
                  Адрес доставки
                </h2>
                <div className="w-full gap-5 flex items-center justify-between mb-5 max-md:flex-col">
                  <input
                    className="w-full py-5 px-10 rounded-xl text-white bg-transparent border-2 border-focusGray"
                    type="text"
                    placeholder="Укажите улицу*"
                  />
                  <input
                    className="w-full py-5 px-10 rounded-xl text-white bg-transparent border-2 border-focusGray"
                    type="number"
                    placeholder="Номер дома*"
                  />
                </div>
                <div className="w-full gap-5 flex items-center justify-between mb-5 max-md:flex-col">
                  <input
                    className="w-full py-5 px-10 rounded-xl text-white bg-transparent border-2 border-focusGray"
                    type="number"
                    placeholder="№ квартиры/офиса"
                  />
                  <input
                    className="w-full py-5 px-10 rounded-xl text-white bg-transparent border-2 border-focusGray"
                    type="text"
                    placeholder="Подъезд"
                  />
                  <input
                    className="w-full py-5 px-10 rounded-xl text-white bg-transparent border-2 border-focusGray"
                    type="text"
                    placeholder="Этаж"
                  />
                </div>
                <input
                  className="w-full py-5 px-10 rounded-xl text-white bg-transparent border-2 border-focusGray"
                  type="text"
                  placeholder="Комментарий"
                />
              </div>
            )}
            <div className="w-1/3">
              {pay === 2 && (
                <div className="">
                  <h2 className="text-base giliroy-200 text-white mb-5">
                    Выберите ресторан
                  </h2>
                  <DropDown
                    setReagin={setReagin}
                    name={"Выберите ресторан"}
                    imgUrl={dropdownIcon}
                    arr={region}
                    borderColor={"border-white/10"}
                    selectColor={"bg-white"}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="p-10 bg-perfectGray rounded-xl mb-5 max-md:p-5">
            <h1 className="text-white giliroy-700 text-lg mb-8">3. Оплатить</h1>
            <div className="flex items-center justify-between w-2/3 mb-5 max-md:w-full">
              <div
                onClick={() => setPayType(1)}
                className={`${payType === 1 ? "bg-graygreen" : "bg-transparent"
                  } cursor-pointer border-2 border-graygreen w-full max-md:truncate px-2 py-5 text-center text-white giliroy-200 text-base rounded-l-xl max-md:text-xs`}
              >
                Оплата онлайн
              </div>
              <div
                onClick={() => setPayType(2)}
                className={`${payType === 2 ? "bg-graygreen" : "bg-transparent"
                  } cursor-pointer border-2 border-graygreen w-full max-md:truncate px-2 py-5 text-center text-white giliroy-200 text-base border-x-0 max-md:text-xs`}
              >
                Курьеру картой
              </div>
              <div
                onClick={() => setPayType(3)}
                className={`${payType === 3 ? "bg-graygreen" : "bg-transparent"
                  } cursor-pointer border-2 border-graygreen w-full max-md:truncate px-2 py-5 text-center text-white giliroy-200 text-base rounded-r-xl max-md:text-xs`}
              >
                Наличными
              </div>
            </div>
            {payType === 3 && (
              <div
                className={` cursor-pointer border-2 border-white/20 w-1/4 py-5 text-center text-white giliroy-200 text-base rounded-xl`}
              >
                Сдача с
              </div>
            )}
          </div>

          <div className="p-10 bg-perfectGray rounded-xl mb-5 max-md:p-5">
            <h1 className="text-white text-balance giliroy-700 mb-8">
              4. Когда доставить
            </h1>
            <div className="w-full flex items-center justify-between mb-5 max-md:flex-col max-md:items-start max-md:gap-5">
              <div className="w-1/2 flex items-center justify-between max-md:w-full">
                <div
                  onClick={() => setFoodTime(1)}
                  className={`${foodTime === 1 ? "bg-graygreen" : "bg-transparent"
                    } cursor-pointer border-2 border-graygreen w-full py-5 text-center text-white giliroy-200 text-base rounded-l-xl max-md:text-xs max-md:truncate max-md:px-4`}
                >
                  В ближайшее время
                </div>
                <div
                  onClick={() => setFoodTime(2)}
                  className={`${foodTime === 2 ? "bg-graygreen" : "bg-transparent"
                    } cursor-pointer border-2 border-graygreen w-full py-5 text-center text-white giliroy-200 text-base border-l-0 rounded-r-xl max-md:text-xs`}
                >
                  Ко времени
                </div>
              </div>
              {foodTime === 2 && (
                <input
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  type="date"
                  className="text-white giliroy-200 text-base w-1/4 max-md:w-full rounded-lg bg-transparent p-5 py-4 border-white/20 border-2"
                  name="food call"
                />
              )}
            </div>
            <div className="w-1/3 flex items-center justify-between border-2 border-white/10 p-5 max-md:w-full rounded-xl text-white giliroy-200 mb-5">
              <p className="max-md:text-xs">Кол-во персон</p>
              <button onClick={() => person > 1 && setPerson(person - 1)}>
                <img src={minus} alt="" />
              </button>
              <p>{person}</p>
              <button onClick={() => setPerson(person + 1)}>
                <img src={plus} alt="" />
              </button>
            </div>
            <h2 className="text-base text-white giliroy-700 mb-5">
              Хотите мы позвоним?
            </h2>
            <div className="flex items-center gap-x-2.5 mb-5 text-13 giliroy-500 text-white">
              <span
                onClick={() => setChangeContact(1)}
                className={`${changeContact === 1
                  ? " border-graygreen  before:bg-graygreen"
                  : "border-white"
                  } cursor-pointer w-5 h-5 transition-all rounded-full border-2 flex items-center justify-center before:content-[''] before:w-3 before:h-3 before:rounded-full`}
              ></span>
              <p>Не перезванивать</p>
            </div>
            <div className="flex items-center gap-x-2.5 mb-5 text-13 giliroy-500 text-white">
              <span
                onClick={() => setChangeContact(2)}
                className={`${changeContact === 2
                  ? " border-graygreen  before:bg-graygreen"
                  : "border-white"
                  } cursor-pointer w-5 h-5 transition-all rounded-full border-2 flex items-center justify-center before:content-[''] before:w-3 before:h-3 before:rounded-full`}
              ></span>
              <p>Потребуется звонок оператора</p>
            </div>
          </div>

          <div className="p-10 bg-perfectGray rounded-xl flex items-center justify-between max-md:flex-col max-md:gap-5">
            <div className="flex items-center gap-x-5 max-md:gap-0 max-md:w-2/3 max-sm:w-full max-md:order-2 max-md:text-center">
              <input type="checkbox" checked name="" id="" />
              <p className="text-13 text-white giliroy-500">
                Я согласен на обработку моих перс. данных в соответствии с
                Условиями
              </p>
            </div>
            <button
              onClick={getZakaz}
              className="text-sm giliroy-700 text-white px-5 py-3 bg-graygreen rounded-lg order-1"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
