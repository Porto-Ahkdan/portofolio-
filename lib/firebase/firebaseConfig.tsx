// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmbcmYK-LNTEtDDUGSfob08uiBop4zWSY",
  authDomain: "image-79312.firebaseapp.com",
  projectId: "image-79312",
  storageBucket: "image-79312.appspot.com",
  messagingSenderId: "359123142714",
  appId: "1:359123142714:web:b85d6bf48c6f2e4398cd03",
  measurementId: "G-EKF3RN9TNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);