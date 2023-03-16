import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Game from './game';
import Header from './header';
import Home from './home';
import Scoreboard from './scoreboard';
import { Waldo, Wenda, Odlaw, Wizard } from '../assets';
import { db, storage } from '../firebase-config';
import { ref, uploadBytes } from '@firebase/storage';


const App = () => {

  const listOfCharacters = [ Waldo, Odlaw, Wenda, Wizard]

  const location = useLocation();

  const [ box, setBox ] = useState([])

/*
  const addNewData = async (e) => {
    e.preventDefault();
                
    await setDoc(doc(db, 'coordinates'), {x: 10, y: 15})
    console.log(docRef.id)
  }
*/
  return (
    <div className='page'>
      <div className="content-wrapper">
      <Header location={location} listOfCharacters={listOfCharacters} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game" element={<Game listOfCharacters={listOfCharacters} box={box} setBox={setBox} />} />
        <Route path="/scoreboard" element={<Scoreboard/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
