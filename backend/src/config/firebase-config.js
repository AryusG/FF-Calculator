import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config({ path: `../.env` });

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "ff--calculator.firebaseapp.com",
  projectId: "ff--calculator",
  storageBucket: "ff--calculator.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const user_app_data = collection(db, "user_app_data");
export { user_app_data, db };
