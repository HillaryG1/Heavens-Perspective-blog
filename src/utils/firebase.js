// firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-1263d.firebaseapp.com",
  projectId: "blog-1263d",
  storageBucket: "blog-1263d.firebasestorage.app",
  messagingSenderId: "1094296268247",
  appId: "1:1094296268247:web:654cfd92e6f2a4cbd8af92",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
