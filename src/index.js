import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const config = {
  apiKey: "AIzaSyDKUDbmb7XTEWy6kqMPCq8DNoeEBJc6WIU",
  authDomain: "where-s-waldo-22957.firebaseapp.com",
  projectId: "where-s-waldo-22957",
  storageBucket: "where-s-waldo-22957.appspot.com",
  messagingSenderId: "972476826469",
  appId: "1:972476826469:web:f4e9c5b16475732510d78c"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const app = initializeApp(config);
export const db = getFirestore(app);