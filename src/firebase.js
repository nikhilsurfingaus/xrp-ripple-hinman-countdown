// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaPydPky0jMU14r_Rr-kHyB3sDsbxTwu8",
    authDomain: "ripple-hinman.firebaseapp.com",
    projectId: "ripple-hinman",
    storageBucket: "ripple-hinman.appspot.com",
    messagingSenderId: "605974927261",
    appId: "1:605974927261:web:bc0fa492a2f0d3334fc174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)