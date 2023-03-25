// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx9AN1C7Vi3B-N6AK4sFrCRekSpXWXnD0",
  authDomain: "datastorage-d76e6.firebaseapp.com",
  databaseURL: "https://datastorage-d76e6.firebaseio.com",
  projectId: "datastorage-d76e6",
  storageBucket: "datastorage-d76e6.appspot.com",
  messagingSenderId: "61210199750",
  appId: "1:61210199750:web:a3154c3180c9c00dd7b9c7",
  measurementId: "G-JM9TK8J6M1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
