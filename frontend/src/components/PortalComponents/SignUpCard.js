import React from 'react'
import GooglePng from '../../assets/sign-in-svgs/Google.png'

function SignUpCard() {
  return (
    <div className="flex card-white font-ubuntu sm:ml-4 sm:mr-10 mx-16 my-16 px-8
      max-w-sm">
      <div className="justify-center">
        <div className="flex">
          <div className='text-2xl font-medium px-7'>
            Get Started
          </div>
        </div>
        <form className="flex-col pb-3 gap-4 px-7 py-4">
          <div className="w-full">
            <input placeholder="Email *" className="input-gray" />
            <input placeholder="Password *" className="input-gray" />
            <input placeholder="Re-enter Password *" className="input-gray" />
          </div>
          <div className="flex mx-8 pb-3 justify-center">
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
        <div className="px-7">
          <button className="btn-white border border-pink inline-flex 
            justify-center w-full">
            {/* <img src={GoogleSVG} alt="Google SVG" className="object-scale-down"/> */}
            <span>
              Register with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpCard