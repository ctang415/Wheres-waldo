import React, { useState, useEffect } from "react"

const Characters = ({ charactersFound }) => {
    return (
        <div className="characters">
                {charactersFound.map((person) => {
                    return (
                <div className="characters-div" key={person.name}>
                    <img className={'characters-image'} src={person.image} alt={person.name}></img>
                </div>
                    )
                })
            }
        </div>
    )
}

export default Characters