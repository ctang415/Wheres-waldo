import { getDocs, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Game from './Game';
import Header from './Header';
import Home from './Home';
import Leaderboard from './Leaderboard';
import { auth, db } from '../firebase-config';
import NotFound from './NotFound';
import { onAuthStateChanged, signInAnonymously } from '@firebase/auth';

const App = () => {
  const location = useLocation();
  const [ gameData, setGameData] = useState([])

  useEffect(() => {
    const getQuery = async () => {
      const querySnapshot = await getDocs(collection(db, "levels"));
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        setGameData(gameData => [...gameData, data])
      });
    }
    getQuery()
  }, [])

  useEffect(() => {
    signInAnonymously(auth)
    .then(() => {
    // Signed in..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ...
    });
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
      // ...
      } else {
      // User is signed out
      // ...
      }
    });
  }, [])

  return (
    <div className="page">
      <Header location={location} gameData={gameData} />
      <div className="content-wrapper">
      <Routes>
        <Route path="/" exact element={<Home gameData={gameData} />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard gameData={gameData} />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
