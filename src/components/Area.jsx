import React, { useState } from "react";

function Area() {
  const [state, setState] = useState({
    altura: 0,
    base: 0,
    resultado: false,
  });

  const calcularArea = () => {
    const area = (state.altura * state.base) / 2;
    return area ? (
      <p className="text-lime-600 w-auto text-center rounded-2xl">
        el area es {area}
      </p>
    ) : (
      <p className="text-red-600 w-auto text-center rounded-2xl">
        Resultado invalido
      </p>
    );
  };
  return (
    <>
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
            {state.resultado ? calcularArea() : <p className=" w-20"> </p>}
          </div>
        </section>
        <hr className="mt-2" />
      </main>
    </>
  );
}

export { Area };
