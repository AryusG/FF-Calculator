import React from 'react'

function ButtonPink({ name }) {
  return (
    <button className="btn font-ubuntu bg-pink text-white 
      hover:border-2 duration-300">
      {name}
    </button>
  )
};

export default ButtonPink;