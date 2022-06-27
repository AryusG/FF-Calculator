import React from 'react'

function ButtonGreen({ name }) {
  return (
    <button className="btn font-ubuntu bg-green-500 text-purple-900
      hover:border-2 border-white duration-300">
      {name}
    </button>
  )
};

export default ButtonGreen;