import { getDocs, collection,} from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Game from './Game';
import Header from './Header';
import Home from './Home';
import Scoreboard from './Scoreboard';
import { db } from '../firebase-config';

const App = () => {
  const location = useLocation();
  const [ box, setBox ] = useState([])
  const [ gameData, setGameData] = useState([])
  const [ gameOver, setGameOver] = useState(false)

  useEffect( () => {
    const getQuery = async () => {
      const querySnapshot = await getDocs(collection(db, "levels"));
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        setGameData(gameData => [...gameData, data])
        console.log(doc.id, " => ", doc.data());
      });
    }
    getQuery()
  }, [])

  return (
    <div className="page">
      <div className="content-wrapper">
      <Header location={location} gameData={gameData} />
      <Routes>
        <Route path="/" exact element={<Home gameData={gameData} />} />
        <Route path="/game/:id" element={<Game setGameOver={setGameOver} gameOver={gameOver} box={box} setBox={setBox} />} />
        <Route path="/scoreboard" element={<Scoreboard/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
