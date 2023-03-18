import Characters from "./characters"
import { PictureOne, PictureTwo, PictureThree } from "../assets"
import React from "react"

const Game = ({setGameOver, listOfCharacters, setBox, box}) => {

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
                <img id="photo-image-search" src={PictureThree} alt="Find Waldo"></img>
            </div>
        </div>
    )
}

export default Game