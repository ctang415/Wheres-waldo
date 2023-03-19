import Characters from "./characters"
import { PictureOne, PictureTwo, PictureThree } from "../assets"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { doc, setDoc, getDocs, getDoc, addDoc, collection, query, where } from 'firebase/firestore'

const Game = ({setGameOver, listOfCharacters, setBox, box}) => {
    const  matchId  = useParams()
    const [ gameData, setGameData ] = useState([])

    const getQuery = async () => {
        const q = query(collection(db, "levels"), where('name', '==', `${matchId.id}`))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setGameData(gameData => [...gameData, doc.data()])
        }); 
      };
      useEffect(() => {
        getQuery(); console.log(gameData)
    }, [])  

    const pushToArray = (e) => {
        if (e.target.id === 'photo-image-search') {
        setBox(box => [{left: e.pageX, top: e.pageY}])
        console.log(box)
        console.log(e.pageX, e.pageY)
        console.log(Math.round((e.nativeEvent.offsetX/e.nativeEvent.target.offsetWidth) * 100))
        console.log(Math.round((e.nativeEvent.offsetY/e.nativeEvent.target.offsetHeight) * 100))
        } if (box.length !== 0) {
        setBox([])
        }
    }
    return (
            <div className="photo" onClick={pushToArray}>
            {box.map(item => {
                return (
                <div key={item} className="characters" style={{ left: item.left, top: item.top }}><Characters listOfCharacters={listOfCharacters}/></div>
                )
            })}
            {gameData.map(item => {
                return (
            <div key={item.name} className="photo-div">
                <img id="photo-image-search" src={item.url} alt="Find Waldo"></img>
            </div>
                )
            })}
        </div>
    )
}

export default Game