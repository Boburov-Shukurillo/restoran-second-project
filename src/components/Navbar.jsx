import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
const Navbar = ({ cart }) => {
  const [salom, setSalmo] = useState([
    { id: 0, name: "Холодные закуски", scroll: 200 },
    { id: 1, name: "Горячие закуски", scroll: 400 },
    { id: 2, name: "Мясные блюда", scroll: 600 },
    { id: 3, name: "Супы", scroll: 800 },
    { id: 4, name: "Рыбные блюда", scroll: 3000 },
    { id: 5, name: "Напитки", scroll: 3600 },
    { id: 6, name: "Гриль меню", scroll: 4200 },
    { id: 7, name: "Фирменные блюда", scroll: 4800 },
  ]);
  const [bir, setBir] = useState(0);
  const active = (e) => {
    let as = salom.find((i) => i.id === +e.target.id).scroll;
    setBir(+e.target.id);
    window.scrollTo({ top: as, behavior: "smooth", left: 0 });
  };
  const myUrl = location.pathname.split("/").join("");
  const [swiper, setSwiper] = useState(false)
  setInterval(() => {
    if (window.innerWidth < 780) {
      setSwiper(true)
    } else {
      setSwiper(false)
    }
  }, 1);
  return (
    <div
      className={`bg-perfectGray border-y-2 border-y-white/10 ${myUrl === "menu" ? "absolute  w-full z-20" : ""
        }
        ${swiper ? "top-24" : "top-0"}
      `}
    >
      <div className="containerb flex items-center justify-between">
        <nav className={`${myUrl === "menu" ? "w-4/5" : "w-full"} max-md:w-full`}>
          <ul className="flex items-center justify-between w-full overflow-scroll">
            {salom.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={active}
                  id={item.id}
                  className={`${item.id === bir && !myUrl.includes("pay") && !myUrl.includes("korzinka")
                    ? "after:bg-graygreen"
                    : "after:bg-transparent"
                    } after:content-[''] after:w-full after:h-1 after:bg-graygreen after:shadow-2xl after:shadow-graygreen flex flex-col items-center justify-center`}
                >
                  <Link to="/menu" id={item.id}>
                    <h2
                      id={item.id}
                      className="text-lg giliroy-200 text-white py-8 b w-52 text-center"
                    >
                      {item.name}
                    </h2>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>


        {myUrl === "menu" && (
          <Link
            to="/korzinka"
            className="px-5 py-3 bg-graygreen rounded-xl giliroy text-white flex items-center justify-between max-md:hidden"
          >
            Корзина{" "}
            <span className="w-0.5 h-7 inline-block bg-gray mx-3"></span>{" "}
            <span className="w-5 h-5 rounded-full bg-white  text-graygreen flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
