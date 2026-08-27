import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAU0VFSO9GS-b3Q2tP5n6rpzFoYiwFc7Qo",
    authDomain: "redcelendin.firebaseapp.com",
    projectId: "redcelendin",
    storageBucket: "redcelendin.firebasestorage.app",
    messagingSenderId: "54657707614",
    appId: "1:54657707614:web:56d764ea86e49df3f44ecf",
    measurementId: "G-VZW3FRDX1L"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };