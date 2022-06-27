import React from 'react'

function ButtonGreen({ name }) {
  return (
    <button className="btn font-ubuntu bg-green-500 text-purple-900
      transition ease-in-out hover:scale-105 hover:-translate-y-1 duration-300">
      {name}
    </button>
  )
};

export default ButtonGreen;