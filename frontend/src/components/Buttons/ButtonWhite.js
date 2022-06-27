import React from 'react'

function ButtonWhite({ name }) {
  return (
    <button className="btn font-ubuntu bg-white text-pink
      hover:border-2 border-pink duration-300">
      {name}
    </button>
  )
};

export default ButtonWhite;