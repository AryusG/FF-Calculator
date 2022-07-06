import { auth } from "../firebase-config/firebase-config";
import { signOut } from "firebase/auth";

async function signOutUser() {
  await signOut(auth);
  window.sessionStorage.clear();
  window.localStorage.clear();
  
}

export {signOutUser}