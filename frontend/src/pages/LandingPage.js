import React, { useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import {getAuth, signInWithCustomToken} from "firebase/auth";

function LandingPage() {
 
  const auth = getAuth();

  return (
    <div className="bg-purple-900 w-full h-screen">
      {auth ? (
        <NavBar />
      ) : (
      <button onClick = {googleLogIn}>Login with google</button>
      )}
    </div>
  );
}

export default LandingPage;
