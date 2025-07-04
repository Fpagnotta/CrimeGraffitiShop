// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-4_EHuygy7Xs-Iz05JGR1pwWXPGKY-DI",
  authDomain: "crgraffitishop.firebaseapp.com",
  projectId: "crgraffitishop",
  storageBucket: "crgraffitishop.firebasestorage.app",
  messagingSenderId: "343685677275",
  appId: "1:343685677275:web:04aaf2440c54fd2cbe0cfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)