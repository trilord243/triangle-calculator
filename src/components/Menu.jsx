import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <div>
        <header>
          <nav className="w-full h-1/5 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500">
            <ul className="flex flex-auto justify-center mt-3  p-2   ">
              <li className="mx-8 ">
                <NavLink to="/">Calculos triangulos</NavLink>
              </li>
              <li className="mx-8">
                <NavLink to="porcentajes"> Porcentajes</NavLink>
              </li>
              <li className="mx-8">
                <NavLink> Otros calculos</NavLink>
              </li>
              <li className="mx-8">
                <NavLink> Otros problemas</NavLink>
              </li>
            </ul>
            <hr />
          </nav>
        </header>
      </div>
    </>
  );
}

export default Menu;
