import React from 'react'
import SignUpCard from '../components/PortalComponents/SignUpCard'
import LoginCard from '../components/PortalComponents/LoginCard'
import LakeLand from '../assets/houses/lake-land.png'
import { Link, useParams } from 'react-router-dom'

function AccountPortal() {
  const { type } = useParams();

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

      <div className="sm:grid grid-cols-2 bg-purple-900 min-h-screen text-center
        py-36">
        <div className="lg:pl-52 md:pl-20 sm:pl-10 px-4 relative">
          <div className="font-ubuntu text-white font-bold text-5xl py-7">
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
          {/* <img src={LakeLand} alt="LakeLand" className="absolute"/> */}
        </div>

        
        <div>
          {/* Add Error Page */}
          {type === "signup" ? <SignUpCard /> : 
            type === "login" ? <LoginCard /> : 'Insert Error Page'}
        </div>
      </div>
    </div>
  )
}
export default AccountPortal 