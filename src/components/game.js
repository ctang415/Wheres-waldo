import React from "react"
import Photo from "./photo"


const Game = ({listOfCharacters, setBox, box}) => {
    return (
        <div className="game">
            Game
            <Photo listOfCharacters={listOfCharacters} box={box} setBox={setBox}/>
        </div>
    )
}

export default Game