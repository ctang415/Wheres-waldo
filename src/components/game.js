import Characters from "./Characters"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { getDocs, collection, query, where } from 'firebase/firestore'
import Modal from "./Modal";
import setOfCoordinatesX from "../functions/coordinatesX";
import setOfCoordinatesY from "../functions/coordinatesY";

const Game = () => {
    const matchId  = useParams()
    const [ box, setBox ] = useState([])
    const [ gameData, setGameData ] = useState([])
    const [ charactersFound, setCharactersFound ] = useState([])
    const [ gameOver, setGameOver] = useState(false)
    const [ timer, setTimer ] = useState(0)

    useEffect(() => {
        if (gameOver === false) {
            const interval = setInterval(() => setTimer(timer => (parseFloat(timer) + 0.01).toFixed(2)), 10)

            return () => clearInterval(interval)
        }
    }, [gameOver])

    useEffect(() => {
    const getQuery = async () => {
        const q = query(collection(db, "levels"), where('name', '==', `${matchId.id}`))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setGameData(gameData => [...gameData, doc.data()])
        });
    };
    getQuery();
    }, [matchId.id])

    useEffect(() => {
        if (gameData.length !== 0) {
            gameData[0].characters.map(item => setCharactersFound(prev => [...prev, {name: item.character, image: item.image, found: false}]))
        }
    }, [gameData])

    const pushToArray = (e) => {
        if (e.target.id === 'photo-image-search') {
            setBox(box => 
                [{
                    left: e.pageX, top: e.pageY, coordinates: {x: Math.round((e.nativeEvent.offsetX/e.nativeEvent.target.offsetWidth) * 100), 
                    y: Math.round((e.nativeEvent.offsetY/e.nativeEvent.target.offsetHeight) * 100)}
                }]
            )
        } 
        if (box.length !== 0 && e.target.className === "characters-image") {
            const index = gameData[0].characters.findIndex(item => JSON.stringify(item.character) === JSON.stringify(e.target.alt))
            const targetX = box[0].coordinates.x
            const targetY = box[0].coordinates.y
            const charX = gameData[0].characters[index].coordinates.x
            const charY = gameData[0].characters[index].coordinates.y
            if ( (setOfCoordinatesX(gameData.name, charX, targetX) === true) && (setOfCoordinatesY(gameData.name, charY, targetY) === true) ) {
                setCharactersFound(charactersFound.map(item => ( JSON.stringify(item.name) === JSON.stringify(e.target.alt) ? {...item, found: true} : item )))
            }
            setBox([])
        } 
        if (box.length !== 0) {
            setBox([])
        }
    }

    useEffect(() => {
        if (charactersFound.length !== 0) {
            const checkIfAllFound = () => {
                const check = charactersFound.every( (prop) => prop.found === true)
                if (check === true) {
                    setGameOver(true)
                }
            }
            checkIfAllFound()
        }
    }, [charactersFound])

    useEffect(() => {
        if (gameOver) {
            document.body.style.overflow = "hidden";
        } 
        return () => document.body.style.overflow = "unset"
    }, [gameOver]);
 
    return (
        <div className="photo" onClick={pushToArray}>
            {box.map(item => {
                return (
                    <div key={item} className="characters" style={{ left: item.left, top: item.top }}>
                        <Characters charactersFound={charactersFound} />
                    </div>
                )
            })}
            {gameData.map(item => {
                return (
                    <div key={item.name} className="photo-div">
                        <img id="photo-image-search" src={item.url} alt="Find Waldo"></img>
                    </div>
                )
            })}
            <Modal matchId={matchId} timer={timer} gameOver={gameOver} />
        </div>
    )
}

export default Game