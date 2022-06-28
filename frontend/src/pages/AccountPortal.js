import React from 'react'
import { Link } from 'react-router-dom'

function AccountPortal() {
  return (
    <div>
      <Link to="/">
        <div className="font-ubuntu font-bold text-white text-xl py-2 px-6 
          top-8 left-12 bg-purple-500 absolute cursor-pointer">
          <div className="hover:scale-110 active:scale-90 duration-300">
            FF-Land
          </div>
        </div>  
      </Link>

      <div className="sm:grid grid-cols-2 bg-purple-900 h-screen text-center
        py-36">
        <div>
          <div className="font-ubuntu text-white font-bold text-4xl py-7">
            <div className="">
              Reach your
            </div>
            <div className="text-transparent bg-clip-text 
              bg-gradient-to-tr from-orange to-purple-300 ">
              Passive Income Goal
            </div>
          </div>
          <div className="font-ubuntu font-regular text-lg text-white">
            Whilst having fun and socialising with other players at the same time!
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}
export default AccountPortal 