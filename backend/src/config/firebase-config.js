import {initializeApp} from "firebase/app"
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDM-qX2cOyJoVLn8BaqsbhhTtC_fgc0DuQ",
    authDomain: "ff--calculator.firebaseapp.com",
    projectId: "ff--calculator",
    storageBucket: "ff--calculator.appspot.com",
    messagingSenderId: "609028844257",
    appId: "1:609028844257:web:0d4c68130f8100591025a0",
    measurementId: "G-DE2V4J143R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const user_app_data = collection(db, "user_app_data");
export {user_app_data, db};