import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcgw8RKiN6Swu4c--TrDHv1zV9_wnYSxw",
  authDomain: "chatapp-f01f0.firebaseapp.com",
  projectId: "chatapp-f01f0",
  storageBucket: "chatapp-f01f0.appspot.com",
  messagingSenderId: "461673969874",
  appId: "1:461673969874:web:9a7514265284cac6d2d50b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
