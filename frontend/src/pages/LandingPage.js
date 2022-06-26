import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import 'firebase/auth';
import { getIdToken, getIdTokenResult, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

function LandingPage() {
  const [auth, setAuth] = useState(false) || window.localStorage.getItem("loggedin") === "true";
  const [token, setToken] = useState("");

  useEffect(()=> {
    onAuthStateChanged((userCred) => {
      if (userCred) 
        setAuth(true);
        window.localStorage.setItem("loggedin", "true");
        getIdToken().then((token) => {
          setToken(token);
        })
    })
  })

  const googleLogIn = () => {
    signInWithPopup(new GoogleAuthProvider()).then((userCred) => {
      if (userCred) {
        setAuth(true);
      }
    });
  };

  return (
    <div className="bg-purple-900 w-full h-screen">
      {auth ? (
        <NavBar />
        // landing page shit
      ) : (
      <button onClick={googleLogIn}>Login with google</button>
      )}
    </div>
  );
}

export default LandingPage;
