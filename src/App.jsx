import { useState } from "react";

import "./App.css";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  return (
    <>
      <h1 className="text-center text-5xl font-bold text-white bg-sky-500 p-5 py-8">
        Buscador de Noticias
      </h1>
     
      <Formulario />
      <ListadoNoticias />
    </>
  );
}

export default App;
