import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAZo8qwf2F-edGOAQvUIls3NpoMVVZwn0",
  authDomain: "galatea2-cec6e.firebaseapp.com",
  projectId: "galatea2-cec6e",
  storageBucket: "galatea2-cec6e.appspot.com",
  messagingSenderId: "721668122659",
  appId: "1:721668122659:web:51e1a14ab6d0b4ee3ee996",
  measurementId: "G-S0PMZFXJZR"
  };


  const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore (app);