import React from "react"

const Characters = ({ charactersFound }) => {
    return (
        <div className="characters">
                {charactersFound.map((person) => {
                    return (
                <div className="characters-div" key={person.name}>
                    <img className={ person.found ? 'characters-image-true' : 'characters-image' } src={person.image} alt={person.name}></img>
                </div>
                    )
                })
            }
        </div>
    )
}

export default Characters