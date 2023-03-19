import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Icon, HomeIcon } from "../assets"

const Header = ({location, gameData}) => {
    const path = location.pathname.substring(1)
    const gameIndex = gameData.findIndex(item => JSON.stringify(item.name) === JSON.stringify(path))
    useEffect(() => {console.log(gameData[gameIndex])}, [])
    const myGame = gameData[gameIndex]
    const [ characters, setCharacters ] = useState([])

    useEffect(() => {
        if (location.pathname.includes('War')) { 
            setCharacters(myGame.characters)
            console.log(gameIndex) 
        }
    }, [])
 
    if ((location.pathname.includes("War") || location.pathname.includes("Medieval") || location.pathname.includes("Sports"))) {
        return (
            <div className="header-true">
                <ul>
                {characters.map(item => {
                    return (
                    <li key={item.character}><img src={item.image}></img></li>
                    )
                })}
                </ul>
                <span>Timer:</span>
                    <Link to="/"><img id="header-true-icon" src={HomeIcon} alt="Home Icon"></img></Link>
            </div>
        )
    } else
    return (
        <div className="header-false">
            <h1 id="header-title-one">Where's</h1> <h1 id="header-title-two">Waldo?</h1>
            <img id="header-icon" src={Icon} alt="Waldo's face"></img>
        </div>
    )
}

export default Header