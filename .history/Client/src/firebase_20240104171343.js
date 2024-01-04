// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-1-d779e.firebaseapp.com",
  projectId: "real-estate-1-d779e",
  storageBucket: "real-estate-1-d779e.appspot.com",
  messagingSenderId: "1059141022979",
  appId: "1:1059141022979:web:44bd5881105d7b1d1ba536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


