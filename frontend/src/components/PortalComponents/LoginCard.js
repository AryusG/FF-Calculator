import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import GooglePng from "../../assets/sign-in-svgs/Google.png";
import { auth } from "../../firebase-config/firebase-config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// import { UserMetadata } from "firebase-admin/lib/auth/user-record";
// ^ double check this file path because it 'module not found'

function LoginCard() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const [isAuth, setAuth] = useState(false);

  async function logInEmailPass(user) {
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      setAuth(true);
    }
    catch (err){
      console.log(err);
      alert("Invalid email or password.");
    }
  }

  async function registerGoogle(user) {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        setAuth(true);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    logInEmailPass(user);
  }

  return !isAuth ? (
    <div
      className="flex card-white font-ubuntu sm:ml-4 sm:mr-10 mx-16 px-8
      max-w-sm"
    >
      <div className="justify-center">
        <div className="flex">
          <div className="text-3xl font-medium px-7">Log In</div>
        </div>

        <form className="flex-col pb-4 pt-7 px-7" onSubmit={(e)=> {handleSubmit(e)}}>
          <div id="login-form-1" className="relative">
            <input
              placeholder="Email"
              className="peer input-gray w-full"
              required
              value={user.email}
              onChange={(e) => {setUser({...user, email: e.target.value})}}
            />
            <label className="absolute floating-label">Email</label>
          </div>
          <div id="login-form-2" className="relative">
            <input
              placeholder="Password"
              className="peer input-gray w-full"
              type="password"
              required
              value={user.password}
              onChange={(e) => {setUser({...user, password: e.target.value})}}
            />
            <label className="absolute floating-label">Password</label>
          </div>
          <div className="flex mx-8 pt-2 pb-5 justify-center">
            <div className="content-center flex">
              <input type="checkbox" id="checkbox-logged-in" className="mr-3"/>
              <label for="checkbox-logged-in" className="text-sm cursor-pointer hover:underline">Stay logged in for this device</label>
            </div>
          </div>
          <div>
            <button className="btn-pink w-full mt-1" type="submit">Log In</button>
          </div>
        </form>

        <div className="px-7 ">
          <button onClick={()=> {registerGoogle(user)}}
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
  ) : (
    navigate("/application")
  );
}

export default LoginCard;
