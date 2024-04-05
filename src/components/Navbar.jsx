import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [salom, setSalmo] = useState([
    { id: 0, name: "Холодные закуски", scroll: 600 },
    { id: 1, name: "Горячие закуски", scroll: 1200 },
    { id: 2, name: "Мясные блюда", scroll: 1800 },
    { id: 3, name: "Супы", scroll: 2400 },
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

  return (
    <div className={`bg-perfectGray border-b-2 border-b-white/5 z-30 w-full`}>
      <nav className="containerb">
        <ul className="flex items-center justify-between h-24 pt-9">
          {salom.map((pr, i) => {
            return (
              <li
                key={pr.id}
                onClick={active}
                className={`text-white flex items-center flex-col pb-8 text-lg giliroy-200  relative ${
                  pr.id === bir ? "salom" : ""
                } cursor-pointer`}
                id={i}
              >
                <h3 id={i}>{pr.name}</h3>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
