import React from "react";
import { Link } from 'react-router-dom';
import twoStoryCozy from "../../assets/houses/two-story-cozy.png";
import insideHouse from "../../assets/houses/inside-house.png";

function Hero() {
  return (
    <div className="sm:grid grid-cols-2 h-auto">
      <div className="md:ml-32 md:mr-1 sm:ml-20 sm:mr-1 my-6 mx-20">
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
        <div className="font-ubuntu font-regular text-base text-white lg:pb-8 pb-10">
          Connected to our partnered stock brokerages, dollar cost average the
          S&P 500 and earn in-game items to customize your digital haven.
          <br></br>
          <br></br>
          Get started now!
        </div>
        <div className="flex gap-8">
          <Link to="/calculator">
            <button className="btn-white">Try for Free</button>
          </Link>
          <Link to="portal/signup">
            <button className="btn-pink ">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="sm:my-40 overflow-x-clip">
        <img
          src={twoStoryCozy}
          alt="two-story-cozy"
          className="xl:scale-110 md:scale-125 scale-110"
        />
      </div>
    </div>
  );
}

export default Hero;
