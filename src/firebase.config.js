// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD038kenZASZKTVY9qyXC--7ZnxHmahpEg",
  authDomain: "invite-931ee.firebaseapp.com",
  projectId: "invite-931ee",
  storageBucket: "invite-931ee.appspot.com",
  messagingSenderId: "778616679155",
  appId: "1:778616679155:web:0748657bd0fb653616e586",
  measurementId: "G-4YXXLDJYY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };