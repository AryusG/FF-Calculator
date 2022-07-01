import { Link } from "react-router-dom";
import GooglePng from "../../assets/sign-in-svgs/Google.png";
import React, { useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config/firebase-config";
import { MAX_VALUE_MILLIS } from "@firebase/util";

function SignUpCard() {
  async function registerWithGoogle(user) {}

  const [user, setUser] = useState({
    email: "",
    password: "",
    reEnteredPass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    async function registerEmail(user) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        console.log(userCredential);
        if (!userCredential) throw "User already exists";
      } catch (err) {
        console.log(err);
      }
    }

    // Need to check if email input is a legit email
    if (user.password === user.reEnteredPass) {
      console.log("passwords match");
      registerEmail(user);
    }
    // Implement if passwords don't match with re-entered
  };

  return (
    <div
      className="flex card-white font-ubuntu sm:ml-4 sm:mr-10 mx-16 px-8
      max-w-sm"
    >
      <div className="justify-center">
        <div className="flex">
          <div className="text-3xl font-medium px-7">Get Started</div>
        </div>
        <form className="flex-col pb-4 pt-7 px-7" onSubmit={handleSubmit}>
          <div id="signup-form-1" className="relative">
            <input
              placeholder="Email *"
              className="peer input-gray w-full"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label className="absolute floating-label">Email</label>
          </div>
          <div id="signup-form-2" className="relative">
            <input
              placeholder="Password *"
              className="peer input-gray w-full"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <label className="absolute floating-label">Password</label>
          </div>
          <div id="signup-form-3" className="relative">
            <input
              placeholder="Re-enter Password *"
              className="peer input-gray w-full"
              required
              value={user.reEnteredPass}
              onChange={(e) =>
                setUser({ ...user, reEnteredPass: e.target.value })
              }
            />
            <label className="absolute floating-label">Re-enter Password</label>
          </div>
          <div className="flex mx-8 pt-2 pb-5 justify-center">
            <div className="content-center sm:mr-4 mr-2">
              <input type="checkbox" />
            </div>
            <p className="text-sm cursor-pointer hover:underline">
              I agree to FF-Land's Privacy Policy
            </p>
          </div>
          <div>
            <button type="submit" className="btn-pink w-full mt-1">
              Register
            </button>
          </div>
        </form>
        <div className="px-7 ">
          <button
            className="btn-white border border-pink inline-flex 
            justify-center items-center w-full px-7 mb-2"
          >
            <img src={GooglePng} alt="Google SVG" className="h-4 mr-3" />
            <span>Register with Google</span>
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
  );
}

export default SignUpCard;
