// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDfT2XkZ3onS5gQAU2oeT_gRpUfW16Dhc",
  authDomain: "dreamsakar-b4d41.firebaseapp.com",
  projectId: "dreamsakar-b4d41",
  storageBucket: "dreamsakar-b4d41.firebasestorage.app",
  messagingSenderId: "982061790643",
  appId: "1:982061790643:web:db3948c8fe4112317d47c6",
  measurementId: "G-FTHQDXK79V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);