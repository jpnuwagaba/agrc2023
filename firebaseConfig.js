// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR3f_Jk6mM0QAtKCTqTHKFWBGkVxlSbIs",
  authDomain: "agrc2023-8e40c.firebaseapp.com",
  projectId: "agrc2023-8e40c",
  storageBucket: "agrc2023-8e40c.appspot.com",
  messagingSenderId: "633748690826",
  appId: "1:633748690826:web:dac51fcf2c8492c6f55a73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);