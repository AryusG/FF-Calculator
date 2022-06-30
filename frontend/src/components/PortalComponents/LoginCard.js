import React, { useState } from "react";
import { Link } from "react-router-dom";
import GooglePng from "../../assets/sign-in-svgs/Google.png";
import { app, auth } from "../../firebase-config/firebase-config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// import { UserMetadata } from "firebase-admin/lib/auth/user-record";
// ^ double check this file path because it 'module not found'

function LoginCard() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  async function logInEmailPass() {}

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    // Implement This 
  }

  return (
    <div
      className="flex card-white font-ubuntu sm:ml-4 sm:mr-10 mx-16 px-8
      max-w-sm"
    >
      <div className="justify-center">
        <div className="flex">
          <div className="text-3xl font-medium px-7">Log In</div>
        </div>

        <form className="flex-col pb-4 pt-7 px-7" onSubmit={handleSubmit}>
          <div id="login-form-1" className="relative">
            <input
              placeholder="Email"
              className="peer input-gray w-full"
              required
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
            <label className="absolute floating-label">Email</label>
          </div>
          <div id="login-form-2" className="relative">
            <input
              placeholder="Password"
              className="peer input-gray w-full"
              required
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
            <label className="absolute floating-label">Password</label>
          </div>
          <div className="flex mx-8 pt-2 pb-5 justify-center">
            <div className="content-center sm:mr-4 mr-2">
              <input type="checkbox" />
            </div>
            <p className="text-sm cursor-pointer hover:underline">
              Stay logged in for this device
            </p>
          </div>
          <div>
            <button className="btn-pink w-full mt-1" type="submit">Log In</button>
          </div>
        </form>

        <div className="px-7 ">
          <button
            className="btn-white border border-pink inline-flex 
            justify-center items-center w-full px-7 mb-2"
          >
            <img src={GooglePng} alt="Google SVG" className="h-4 mr-3" />
            <span>Log in with Google</span>
          </button>
          <div className="font-light text-sm">
            <Link to="/portal/signup">
              <button className="hover:underline">
                Don’t have an account? Join FF-Land
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
