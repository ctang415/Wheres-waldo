import React from "react"

const Characters = ({ gameData, setBox, box }) => {
    return (
        <div className="characters">
        {gameData.map(item => {
            return (
                item.characters.map((person) => {
                    return (
                <div className="characters-div" key={person.character}>
                    <img className="characters-image" src={person.image}></img>
                </div>
                    )
                })
            ) 
        })}
        </div>
    )
}

export default Characters