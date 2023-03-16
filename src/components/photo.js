import Characters from "./characters"
import { PictureOne } from "../assets"
import React, { useEffect } from "react"

const Photo = ({listOfCharacters, setBox, box}) => {

    const pushToArray = (e) => {
        if (e.target.id === 'photo-image-search') {
        setBox(box => [{left: e.pageX, top: e.pageY}])
        console.log(box)
        console.log(e.pageX, e.pageY)
        console.log(e.target.id)
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
                <img id="photo-image-search" src={PictureOne} alt="Find Waldo"></img>
            </div>
        </div>
    )
}

export default Photo