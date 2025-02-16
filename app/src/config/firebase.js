// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMjRyBdt8Md3a4cZdiNCLNroMDI4fZsbU",
    authDomain: "pearlhacks2025.firebaseapp.com",
    projectId: "pearlhacks2025",
    storageBucket: "pearlhacks2025.firebasestorage.app",
    messagingSenderId: "334604183691",
    appId: "1:334604183691:web:6e599e77e165399b0dcc8e",
    measurementId: "G-BBYQ1N1KFP"
  };
  
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
  