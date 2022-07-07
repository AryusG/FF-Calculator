import { auth } from "../firebase-config/firebase-config";
import { signOut } from "firebase/auth";

function signOutUser() {
  signOut(auth);
  window.sessionStorage.clear();
  window.localStorage.clear();
  
}

export {signOutUser}