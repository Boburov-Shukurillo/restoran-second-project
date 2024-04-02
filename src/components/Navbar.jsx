import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [salom, setSalmo] = useState([
    { id: 0, name: "Холодные закуски" },
    { id: 1, name: "Горячие закуски" },
    { id: 2, name: "Мясные блюда" },
    { id: 3, name: "Супы" },
    { id: 4, name: "Рыбные блюда" },
    { id: 5, name: "Напитки" },
    { id: 6, name: "Гриль меню" },
    { id: 7, name: "Фирменные блюда" },
  ]);
  const [bir, setBir] = useState(0);
  const active = (e) => {
    setBir(parseInt(e.target.id));
  };
  return (
    <div className="bg-perfectGray border-b-2">
      <nav className="containerb">
        <ul className="flex items-center justify-between h-24 pt-9">
          {salom.map((pr) => {
            return (
              <li
                key={pr.id}
                onClick={active}
                className={`text-white flex items-center flex-col pb-8 text-lg giliroy  relative ${pr.id === bir ? "salom" : ""} cursor-pointer`}
              >
                <h1 id={pr.id}>{pr.name}</h1>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
