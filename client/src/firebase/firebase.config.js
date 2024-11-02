// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByTanJ-WBpn2Q8zB_dL8JnjOVudTYuwu4",
  authDomain: "bookstore-a538e.firebaseapp.com",
  projectId: "bookstore-a538e",
  storageBucket: "bookstore-a538e.appspot.com",
  messagingSenderId: "573714744658",
  appId: "1:573714744658:web:7987ef895c37a7b10b268b",
  measurementId: "G-7M1N6E3NR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
