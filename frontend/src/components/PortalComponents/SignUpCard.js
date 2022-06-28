import React, { useState } from 'react'
import GoogleSVG from '../../assets/sign-in-svgs/Google.png'
import { onAuthStateChanged, signInWithEmailAndPassword, 
        GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase-config/firebase-config"
import { MAX_VALUE_MILLIS } from '@firebase/util';

  



  async function registerWithGoogle(user) {
  }
  
  
  async function registerEmail(user) {
    const newUser = user;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
      console.log(userCredential)
      if (!userCredential) throw "User already exists"
    }
    catch (err){
      console.log(err);
    }
  }
  
  function SignUpCard() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  return (
    <div className="flex card-white font-ubuntu sm:ml-4 sm:mr-10 mx-16 my-16 w-9/12">
      <div className="justify-center">
        <div className='text-2xl font-medium'>
          Get Started
        </div>
        <form className="pb-3">
          <div className="flex-col gap-4 px-7 py-4">
            <input 
            placeholder="Email *" 
            className="input-gray" 
            required
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            />
            <input placeholder="Password *" 
            className="input-gray" 
            required
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            />
            <input placeholder="Re-enter Password *" className="input-gray" />
          </div>
          <div className="flex mx-12 pb-3 justify-center">
            <div className="content-center sm:mr-5 mr-2">
              <input type="checkbox"/>
            </div>
            <p className="text-sm">
              I agree to FF-Land's Privacy Policy
            </p>
          </div> 
          <button onClick={() => registerEmail(user)}
          className="btn-pink w-auto">Register</button>
        </form>
        <button className="btn-white border border-pink inline-flex">
          {/* <img src={GoogleSVG} alt="Google SVG" className="object-scale-down"/> */}
          <span>
            Register with Google
          </span>
        </button>
      </div>
    </div>
  )
}

export default SignUpCard