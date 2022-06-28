import React from 'react'
import { Link } from 'react-router-dom'
import GooglePng from '../../assets/sign-in-svgs/Google.png'

function SignUpCard() {
  return (
    <div className="flex card-white font-ubuntu sm:ml-4 sm:mr-10 mx-16 px-8
      max-w-sm">
      <div className="justify-center">
        <div className="flex">
          <div className='text-3xl font-medium px-7'>
            Get Started
          </div>
        </div>
        <form className="flex-col pb-4 pt-7 px-7 ">
          <div id="signup-form-1" className="relative">
            <input placeholder="Email *" className="peer input-gray w-full
              "/>
            <label className="absolute floating-label">
              Email
            </label>
          </div>
          <div id="signup-form-2" className="relative">
            <input placeholder="Password *" className="peer input-gray w-full 
              "/>
            <label className="absolute floating-label">
              Password
            </label>
          </div>
          <div id="signup-form-3" className="relative">
            <input placeholder="Re-enter Password *" className="peer input-gray w-full 
              "/>
            <label className="absolute floating-label">
              Re-enter Password
            </label>
          </div>
          <div className="flex mx-8 pt-2 pb-5 justify-center">
            <div className="content-center sm:mr-4 mr-2">
              <input type="checkbox"/>
            </div>
            <p className="text-sm">
              I agree to FF-Land's Privacy Policy
            </p>
          </div> 
          <div>
            <button className="btn-pink w-full">Register</button>
          </div>
        </form>
        <div className="px-7 ">
          <button className="btn-white border border-pink inline-flex 
            justify-center items-center w-full px-7 mb-2">
            <img src={GooglePng} alt="Google SVG" className="h-4 mr-3"/>
            <span>
              Register with Google
            </span>
          </button>
          <div className="font-light text-sm">
            <Link to="/portal/login">
              <button className="hover:underline">
                Already have an account? Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpCard