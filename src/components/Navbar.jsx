import React, { useState } from "react";
import { Link } from "react-router-dom";
import { typeOfFoods } from "../data";
const Navbar = () => {
  const [beActive, setBeActive] = useState();
  const active = (e) => {
    let actived = typeOfFoods.find((i) => i.id === parseInt(e.target.id));
    actived.isActive = true;
    console.log(actived);
  };
  return (
    <div className="bg-perfectGray">
      <nav className="containerb">
        <ul className="flex items-center justify-between h-24 pt-9 border-b-2">
          {typeOfFoods.map((elem) => {
            return (
              <li onClick={active} id="1" key={elem.id} className="h-full">
                <Link
                  to="/"
                  id={elem.id}
                  className={`flex giliroy flex-col text-lg text-gray relative items-center justify-between h-full ${
                    elem.isActive ? "after:block" : "after:hidden"
                  }`}
                >
                  {elem.name}
                </Link>
                {/* <span className="w-full h-2 bg-red-600 inline-block"></span> */}
              </li>
            );
          })}
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
