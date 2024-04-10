// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-uz6n_q93EnyKJM7WYp6frwQRlMup4IE",
  authDomain: "assignment-9-978bf.firebaseapp.com",
  projectId: "assignment-9-978bf",
  storageBucket: "assignment-9-978bf.appspot.com",
  messagingSenderId: "778167485280",
  appId: "1:778167485280:web:d8f172918d389e858bd405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;