import React, { useState } from "react";
import Altura from "./Altura";
import { Area } from "./Area";
import Menu from "./Menu";

function HomePage() {
  return (
    <>
      <Menu />
      <h1 className="text-center mt-4 text-4xl">
        Aqui podras calcular algunas operaciones matematicas!
      </h1>
      <Area />
      <Altura />
    </>
  );
}

export default HomePage;
