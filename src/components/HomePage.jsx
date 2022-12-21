import React, { useState } from "react";
import Altura from "./Altura";
import Menu from "./Menu";

function HomePage() {
  const [state, setState] = useState({
    altura: 0,
    base: 0,
    resultado: false,
  });

  const calcularArea = () => {
    return (state.altura * state.base) / 2;
  };
  return (
    <>
      <Menu />
      <h1 className="text-center mt-4 text-4xl">
        Aqui podras calcular algunas operaciones matematicas!
      </h1>
      <hr className="mt-2" />
      <main>
        <section>
          <h2 className="text-center mt-4 ">
            Calcular area de circuloos apartir de su altura{" "}
          </h2>
          <p className="text-center mb-5">
            (El resultado esta basado en el mismo sistema metrico ){" "}
          </p>
          <div className="grid grid-cols-3 ml-2 ">
            <div>
              <p>Ingrese la base del Triangulo </p>
              <input
                type="number"
                placeholder="Base"
                className="shadow appearance-none border border-black-500 rounded w-20  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline object-center ml-14"
                value={state.base}
                onChange={(event) => {
                  setState({ ...state, base: event.target.value });
                }}
              />
            </div>

            <div>
              <p>Ingrese la altura del Triangulo </p>

              <input
                type="number"
                placeholder="altura"
                className="shadow appearance-none border border-black-500 rounded w-20  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline object-center ml-14"
                value={state.altura}
                onChange={(event) => {
                  setState({ ...state, altura: event.target.value });
                }}
              />
            </div>
            <div>
              <img
                src="https://recursos.pacoelchato.com/img/AWBNQ0HJ0Mf5X7pXPyGuGQEzwgfLertpV4mRAIFq.png"
                alt="Imagen de triangulo "
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-24 ml-10"
              onClick={() => {
                setState({ ...state, resultado: true });
              }}
            >
              {" "}
              Calcular
            </button>
            {state.resultado ? (
              <p className="bg-blue-400 w-20 text-center"> {calcularArea()} </p>
            ) : (
              <p className="bg-blue-400 w-20"></p>
            )}
          </div>
        </section>
        <hr />
      </main>
      <Altura />
    </>
  );
}

export default HomePage;