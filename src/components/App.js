import { doc, setDoc, getDocs, getDoc, addDoc, collection, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useParams } from 'react-router';
import Game from './game';
import Header from './header';
import Home from './home';
import Scoreboard from './scoreboard';
import { Waldo, Wenda, Odlaw, Wizard, PictureOne, PictureTwo, PictureThree } from '../assets';
import { db } from '../firebase-config';

const App = () => {

  const listOfCharacters = [ Waldo, Odlaw, Wenda, Wizard]

  const location = useLocation();
  const [ box, setBox ] = useState([])
  const [ gameData, setGameData] = useState([])
  const [ gameOver, setGameOver] = useState(false)

  const getQuery = async () => {
  const querySnapshot = await getDocs(collection(db, "levels"));
  querySnapshot.forEach((doc) => {
  const data = doc.data()
  setGameData(gameData => [...gameData, data])
  console.log(doc.id, " => ", doc.data());
});
  }
  useEffect(() => {getQuery()}, [])

  return (
    <div className="page">
      <div className="content-wrapper">
      <Header location={location} listOfCharacters={listOfCharacters} />
      <Routes>
        <Route path="/" exact element={<Home gameData={gameData} />} />
        <Route path="/game/:id" element={<Game setGameOver={setGameOver} listOfCharacters={listOfCharacters} box={box} setBox={setBox} />} />
        <Route path="/scoreboard" element={<Scoreboard/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
