// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Gr5iGJmt3vHGV3_SuuV1lH8Iv2ukm18",
  authDomain: "trapp-8f7cf.firebaseapp.com",
  projectId: "trapp-8f7cf",
  storageBucket: "trapp-8f7cf.appspot.com",
  messagingSenderId: "654035320364",
  appId: "1:654035320364:web:70787ed6e6708a556adb89",
  measurementId: "G-VZ6Y79RJQL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
