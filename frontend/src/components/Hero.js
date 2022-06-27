import React, { useState, useEffect } from 'react'
import twoStoryCozy from '../assets/houses/two-story-cozy.png'
import insideHouse from '../assets/houses/inside-house.png'

function Hero() {

  return (
    <div className="sm:grid grid-cols-2">
      <div className="">
        <img src={insideHouse} alt="inside-house"/>
        <h1 className='font-ubuntu font-bold text-4xl text-white'>
          <div>
            Gamify Your Path to
          </div> 
          <div className="text-transparent bg-clip-text bg-gradient-to-tr from-orange to-purple-300">
            Financial Freedom
          </div> 
        </h1>
        <div className='font-ubuntu font-regular text-base text-white'>
          Connected to our partnered stock brokerages, 
          dollar cost average the S&P 500 and earn in-game items to customize your digital haven.
        </div>
        <div>
          <button className="btn-pink">Sign Up</button>
        </div>
      </div>
      <div className="">
        <img 
          src={twoStoryCozy} 
          alt="two-story-cozy"
          />
      </div>
    </div>
  )
}

export default Hero