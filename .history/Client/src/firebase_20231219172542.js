// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-701a5.firebaseapp.com",
  projectId: "mern-project-701a5",
  storageBucket: "mern-project-701a5.appspot.com",
  messagingSenderId: "176609771994",
  appId: "1:176609771994:web:98cd612cbc6445b10880e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);