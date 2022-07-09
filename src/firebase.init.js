// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnrWLpsUyukwEn8SmvFTjolF_YUxdwk0w",
    authDomain: "etask-dbb59.firebaseapp.com",
    projectId: "etask-dbb59",
    storageBucket: "etask-dbb59.appspot.com",
    messagingSenderId: "581992988816",
    appId: "1:581992988816:web:5603f09febdaa8299c1815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;