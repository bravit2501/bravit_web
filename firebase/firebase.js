// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1LTIai48Qj8ZsrK_9JKvVYIkJj_a0Hcc",
  authDomain: "bravit-8b314.firebaseapp.com",
  projectId: "bravit-8b314",
  storageBucket: "bravit-8b314.appspot.com",
  messagingSenderId: "485575590803",
  appId: "1:485575590803:web:da03636340cfb139ef1e66",
  measurementId: "G-5YPJ485YXY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
