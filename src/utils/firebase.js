// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUL-7BATSbs3Rampb2TqpW8tS8Dbt3PMM",
  authDomain: "netflixgpt-7a436.firebaseapp.com",
  projectId: "netflixgpt-7a436",
  storageBucket: "netflixgpt-7a436.appspot.com",
  messagingSenderId: "897313706697",
  appId: "1:897313706697:web:b82ca595016814345ff318",
  measurementId: "G-5P2KTQ7FDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);