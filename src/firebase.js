// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6ciL61UHbHZ5QSLmI2XdxH_zKILM-X4g",
  authDomain: "sid-todo-d6437.firebaseapp.com",
  projectId: "sid-todo-d6437",
  storageBucket: "sid-todo-d6437.appspot.com",
  messagingSenderId: "115474080759",
  appId: "1:115474080759:web:f2290645bba501a43cc4f2",
  measurementId: "G-F3GQW8KDNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);