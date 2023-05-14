// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuratio
const firebaseConfig = {
  apiKey: "AIzaSyBpz1dDPVHber-MGage9h7dGzHMxJLJbsg",
  authDomain: "show-971f0.firebaseapp.com",
  projectId: "show-971f0",
  storageBucket: "show-971f0.appspot.com",
  messagingSenderId: "389694107532",
  appId: "1:389694107532:web:11fa3322231da30e18b0a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);