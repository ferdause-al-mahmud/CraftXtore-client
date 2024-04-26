// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw1P726Uylm0-jKKYwsQ7NWFbE8QY1evo",
    authDomain: "craftxtore.firebaseapp.com",
    projectId: "craftxtore",
    storageBucket: "craftxtore.appspot.com",
    messagingSenderId: "679487242497",
    appId: "1:679487242497:web:c1103cdb3f853223bc9b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);