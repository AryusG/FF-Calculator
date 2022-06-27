import React from 'react'

function ButtonWhite({ name }) {
  return (
    <button className="btn font-ubuntu bg-white text-pink
      transition ease-in-out hover:scale-105 hover:-translate-y-1 duration-300">
      {name}
    </button>
  )
};

export default ButtonWhite;