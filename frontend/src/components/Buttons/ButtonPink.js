import React from 'react'

function ButtonPink({ name }) {
  return (
    <button className="btn font-ubuntu bg-pink text-white 
      transition ease-in-out hover:scale-105 hover:-translate-y-1 duration-300">
      {name}
    </button>
  )
};

export default ButtonPink;