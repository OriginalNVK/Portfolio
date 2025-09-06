// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmQSjFv0r9HiicNcyD9Ott0Egx1gx5JCw",
  authDomain: "portfolio-c9ba7.firebaseapp.com",
  projectId: "portfolio-c9ba7",
  storageBucket: "portfolio-c9ba7.firebasestorage.app",
  messagingSenderId: "1084942344313",
  appId: "1:1084942344313:web:07cea81a231b0250d674a8",
  measurementId: "G-KEYK5W2CEZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage };
