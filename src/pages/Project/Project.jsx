import React from "react";
import Imagen from "../About-me/components/Imagen";
import Cards from "./Components/Cards";

export default function index() {
  return (
    <div className="bg-white/30 px-10   flex flex-wrap  items-center justify-center gap-8 z-50  text-white font-chakra ">
      <div className="flex justify-between w-full">
        <div>
          <h1>Agustin Carrizo</h1>
        </div>
        <div className="flex gap-5">
          <button>About</button>
          <button>CV</button>
        </div>
        <button>Contactame</button>
      </div>
      <div className="flex">
        <div className="absolute w-[25vw] left-5 hidden md:flex md:justify-center md:flex-col md:items-center h-80  ">
          <Imagen />
          <h1>hola</h1>
        </div>
        <div className="absolute right-5 w-[70vw] flex flex-wrap gap-20 ">
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}
