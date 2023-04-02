// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyDKUDbmb7XTEWy6kqMPCq8DNoeEBJc6WIU",
  authDomain: "where-s-waldo-22957.firebaseapp.com",
  projectId: "where-s-waldo-22957",
  storageBucket: "where-s-waldo-22957.appspot.com",
  messagingSenderId: "972476826469",
  appId: "1:972476826469:web:f4e9c5b16475732510d78c"
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);

