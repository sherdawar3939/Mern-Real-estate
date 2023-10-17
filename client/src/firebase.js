// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f72a3.firebaseapp.com",
  projectId: "mern-estate-f72a3",
  storageBucket: "mern-estate-f72a3.appspot.com",
  messagingSenderId: "1067820074921",
  appId: "1:1067820074921:web:bebf57d15d8bfa221926b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);