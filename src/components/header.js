import React from "react"
import { Icon, HomeIcon } from "../assets"

const Header = ({gameStatus, homeClickHandler, listOfCharacters}) => {
    if (gameStatus === true) {
        return (
            <div className="header-true">
                <ul>
                {listOfCharacters.map(character => {
                    return (
                        <li key={character}><img src={character}></img></li>
                    )
                })}
                </ul>
                <span>Timer:</span>
                    <img id="header-true-icon" src={HomeIcon} alt="Home Icon" onClick={homeClickHandler}></img>
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