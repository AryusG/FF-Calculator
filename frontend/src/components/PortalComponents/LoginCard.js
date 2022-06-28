import React from 'react'
import {app, auth} from "../../firebase-config/firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword, 
        GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth";

async function logInEmailPass() {
  
}

function LoginCard() {
  return (
    <div className="card-white font-ubuntu">
      <div>
        Log In
      </div>
    </div>
  )
}

export default LoginCard