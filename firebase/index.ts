// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "<>",
  authDomain: "<>",
  projected: "<>",
  storageBucket: "<>",
  messagingSenderId: "<>",
  appId: "<>",
  measurementId: "<>"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);

// export const retrieveMessagingToken = async () => {
//   return await getToken(messaging, {
//     vapidKey:
//       "",
//   });
// };
//const analytics = getAnalytics(app);
