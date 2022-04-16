// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwkM45iiQizBHLiHddCwEARsQK1ebxTiE",
  authDomain: "assignment-10-10830.firebaseapp.com",
  projectId: "assignment-10-10830",
  storageBucket: "assignment-10-10830.appspot.com",
  messagingSenderId: "110363903143",
  appId: "1:110363903143:web:617607720f6d31239f4782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
