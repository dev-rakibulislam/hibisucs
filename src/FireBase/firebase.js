// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiiwa7xbSZvPOJAwYKu1Kvkan0RF8r6M4",
  authDomain: "ass-10-hibiscuc.firebaseapp.com",
  projectId: "ass-10-hibiscuc",
  storageBucket: "ass-10-hibiscuc.firebasestorage.app",
  messagingSenderId: "707319706228",
  appId: "1:707319706228:web:adfcdafec6f2ea0f505721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
