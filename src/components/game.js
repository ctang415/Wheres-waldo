import Characters from "./characters"
import { PictureOne, PictureTwo, PictureThree } from "../assets"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom";

const Game = ({setGameOver, gameData, listOfCharacters, setBox, box}) => {
    const  matchId  = useParams()

    const myGame = gameData.find(item => item.name === matchId.id) 

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
            <div className="photo-div">
                <img id="photo-image-search" src={myGame.url} alt="Find Waldo"></img>
            </div>

        </div>
    )
}

export default Game