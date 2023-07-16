import React from "react"

const Characters = ({ charactersFound }) => {
    return (
        charactersFound.map((person) => {
            return (
                <div className="characters-div" key={person.name}>
                    <img className={ person.found ? 'characters-image-true' : 'characters-image' } src={person.image} alt={person.name}></img>
                </div>
            )
        })
    )
}

export default Characters