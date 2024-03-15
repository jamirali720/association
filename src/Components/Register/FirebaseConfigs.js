// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrucJDR88eY0PHdoI0t0pENW1wXzArJgY",
  authDomain: "association-948a6.firebaseapp.com",
  projectId: "association-948a6",
  storageBucket: "association-948a6.appspot.com",
  messagingSenderId: "241549056862",
  appId: "1:241549056862:web:da5c1466a92116b64e8dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;