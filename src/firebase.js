// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzL3pHV2i3O1vjrA1hSY7vnV-XZXOKEDg",
    authDomain: "raisonnance.firebaseapp.com",
    projectId: "raisonnance",
    storageBucket: "raisonnance.firebasestorage.app",
    messagingSenderId: "343390160411",
    appId: "1:343390160411:web:c6d71c3bf1fe7ae1559abe",
    measurementId: "G-DZVW4QZL2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialisation de Firestore
const db = getFirestore(app);
export { db };