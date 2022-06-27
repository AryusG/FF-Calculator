import React, { useState, useEffect } from "react";
import twoStoryCozy from "../assets/houses/two-story-cozy.png";
import insideHouse from "../assets/houses/inside-house.png";

function Hero() {
  return (
    <div className="sm:grid grid-cols-2 h-auto">
      <div className="md:ml-32 md:mr-1 sm:ml-20 sm:mr-1 my-10 mx-20">
        <img
          src={insideHouse}
          alt="inside-house"
          className="py-5 mx-auto"
        />
        <h1 className="font-ubuntu font-bold text-4xl text-white pb-7">
          <div>Gamify Your Path to</div>
          <div
            className="text-transparent bg-clip-text 
           bg-gradient-to-tr from-orange to-purple-300"
          >
            Financial Freedom
          </div>
        </h1>
        <div className="font-ubuntu font-regular text-base text-white pb-8">
          Connected to our partnered stock brokerages, dollar cost average the
          S&P 500 and earn in-game items to customize your digital haven.
        </div>
        <div className="">
          <button className="btn-pink">Sign Up</button>
        </div>
      </div>
      <div className="sm:my-40">
        <img
          src={twoStoryCozy}
          alt="two-story-cozy"
          className="object-cover h-100"
        />
      </div>
    </div>
  );
}

export default Hero;
