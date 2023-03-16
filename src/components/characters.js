import React from "react"

const Characters = ({listOfCharacters, setBox, box}) => {
    return (
        <div className="characters">
        {listOfCharacters.map(item => {
            return (
                <div className="characters-div" key={item}>
                    <img className="characters-image" src={item}></img>
                </div>
            )
        })}
        </div>
    )
}

export default Characters