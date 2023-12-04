// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnF4SgUqMGKB7_gp-5jtdMDy0zKKG9hns",
  authDomain: "gowthamwithvidya.firebaseapp.com",
  projectId: "gowthamwithvidya",
  storageBucket: "gowthamwithvidya.appspot.com",
  messagingSenderId: "141854166918",
  appId: "1:141854166918:web:452b0ddae54c84f5afa607",
  measurementId: "G-N47JBJ3PZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export { analytics };