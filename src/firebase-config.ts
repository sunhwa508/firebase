// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '@firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpjtEIq9smnGbzbgsZmSUbPiIvMCCsd4I",
    authDomain: "random-lunch-f3897.firebaseapp.com",
    projectId: "random-lunch-f3897",
    storageBucket: "random-lunch-f3897.appspot.com",
    messagingSenderId: "762866084701",
    appId: "1:762866084701:web:bb70e12b30570be59f16b4",
    measurementId: "G-H2WPHKNNZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)