import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import { db } from '..';
import Game from './game';
import Header from './header';
import Home from './home';
import Scoreboard from './scoreboard';
import { useNavigate } from "react-router-dom";


const App = () => {

  const navigate = useNavigate();
  const startClickHandler = (e) => {
    navigate('/game')
    setGameStatus(true)
  }

  const [ gameStatus, setGameStatus] = useState(false)

  const addNewData = async (e) => {
    e.preventDefault();
                
    const docRef = await addDoc(collection(db, 'coordinates'), {x: 10, y: 15})
    console.log(docRef.id)
  }


  return (
    <div>
      <Header gameStatus={gameStatus} />
      <Routes>
        <Route path="/" exact element={<Home startClickHandler={startClickHandler} />} />
        <Route path="/game" element={<Game setGameStatus={setGameStatus} />} />
        <Route path="/scoreboard" element={<Scoreboard/>} />
      </Routes>
    </div>
  );
}

export default App;
