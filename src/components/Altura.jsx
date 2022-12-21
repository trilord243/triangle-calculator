import React, { useState } from "react";

function Altura() {
  const [state, setState] = useState({
    lado1: 0,
    lado2: 0,
    base: 0,
    resultado: false,
  });

  const calcularArea = () => {
    const lado1 = Number(state.lado1);
    const lado2 = Number(state.lado2);
    const base = Number(state.base);
    const semiPerimetro = (lado1 + lado2 + base) / 2;

    const altura =
      (2 / base) *
      Math.sqrt(
        semiPerimetro *
          (semiPerimetro - lado1) *
          (semiPerimetro - lado2) *
          (semiPerimetro - base)
      );
    const resultado = altura.toFixed(2);

    if (resultado == 0 || resultado === "NaN") {
      return <p className="text-red-500">Resultado invalido</p>;
    } else {
      return <p className="text-green-400">El resultado es {resultado}</p>;
    }
  };

  return (
    <>
      <main>
        <section>
          <h2 className="text-center mt-4 ">
            Calcular la altura del triangulo sabiendo 2 lados y la base{" "}
          </h2>
          <p className="text-center mb-5"> </p>
          <div className="grid grid-cols-4 ">
            <div className="ml-4">
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
              <p>Ingrese el lado1 del Triangulo </p>

              <input
                type="number"
                placeholder="altura"
                className="shadow appearance-none border border-black-500 rounded w-20  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline object-center ml-14"
                value={state.lado1}
                onChange={(event) => {
                  setState({ ...state, lado1: event.target.value });
                }}
              />
            </div>
            <div>
              <p>Ingrese el lado del Triangulo </p>
              <input
                type="number"
                placeholder="Base"
                className="shadow appearance-none border border-black-500 rounded w-20  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline object-center ml-14"
                value={state.lado2}
                onChange={(event) => {
                  setState({ ...state, lado2: event.target.value });
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
            {state.resultado ? calcularArea() : <p className=" w-20"></p>}
          </div>
        </section>
        <hr />
      </main>
    </>
  );
}

export default Altura;
