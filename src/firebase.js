// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-70428.firebaseapp.com",
  projectId: "mern-estate-70428",
  storageBucket: "mern-estate-70428.appspot.com",
  messagingSenderId: "391755374944",
  appId: "1:391755374944:web:ce14e10e42b66d5549fe05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);