import React from "react";
import { Link } from "react-router-dom";
import VillaCozy from "../assets/houses/villa-cozy.png";
import Calculator from "../components/CalculatorComponents/CalculatorInputCard";
import CalculatorResults from "../components/CalculatorComponents/CalculatorResultCard";

function CalculatorPage() {
  return (
    <div className="bg-purple-900 min-h-screen py-36">

      <Link to="/">
        <div
          className="font-ubuntu font-bold text-white text-xl py-2 px-6 
          top-8 left-12 bg-purple-500 absolute cursor-pointer"
        >
          <div className="hover:scale-110 active:scale-90 duration-300">
            FF-Land
          </div>
        </div>
      </Link>

      <div className="sm:grid grid-cols-2">

        <div
          className="font-ubuntu text-5xl font-bold text-white text-center
          col-span-2 mb-6"
        >
          <span>Let's </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-orange to-purple-300">
            Calculate
          </span>
        </div>

        <div className="ml-auto mr-5">
          <Calculator />
        </div>

        <div className="mr-auto ml-5">
          <CalculatorResults />
        </div>

        <img src={VillaCozy} alt="VillaCozy" className="mx-4 sm:hidden mt-4" />

      </div>
    </div>
  );
}

export default CalculatorPage;
