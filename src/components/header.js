import React from "react"
import { Link } from "react-router-dom"
import { Icon, HomeIcon } from "../assets"

const Header = ({location, listOfCharacters}) => {
    if (location.pathname.includes('game')) {
        return (
            <div className="header-true">
                <ul>
                {listOfCharacters.map(character => {
                    return (
                        <li key={character}><img src={character} alt="Waldo character"></img></li>
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