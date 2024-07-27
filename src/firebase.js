// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "YAIzaSyBlVNmsteVUuzWByr78bXBIcUvNA-GX7KI",
    authDomain: "instagram-clone-7a2b0.firebaseapp.com",
    projectId: "instagram-clone-7a2b0",
    storageBucket: "instagram-clone-7a2b0.appspot.com",
    messagingSenderId: "523597104921",
    appId: "1:523597104921:web:0e6b920a186b9d4820a788"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
