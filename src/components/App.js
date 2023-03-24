import { setDoc, doc, getDocs, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Game from './Game';
import Header from './Header';
import Home from './Home';
import Leaderboard from './Leaderboard';
import { db } from '../firebase-config';

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

  useEffect( () => {
    const addToCollection = async () => {
    await setDoc(doc(db, "scores", "War"), {
      exists: true
    })
      await setDoc(doc(db, "scores", "Medieval"), {
        exists: true
    })
    await setDoc(doc(db, "scores", "Sports"), {
      exists: true
    })
}

  console.log('data sent')
  }, [])

  return (
    <div className="page">
      <div className="content-wrapper">
      <Header location={location} gameData={gameData} />
      <Routes>
        <Route path="/" exact element={<Home gameData={gameData} />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard gameData={gameData} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
