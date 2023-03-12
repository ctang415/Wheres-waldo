import React from "react"
import { Icon } from "../assets"

const Header = ({gameStatus, homeClickHandler}) => {
    if (gameStatus === true) {
        return (
            <div className="header">
                <span>Characters</span>
                <span>Timer</span>
                <button onClick={homeClickHandler}>Home</button>
            </div>
        )
    } else
    return (
        <div className="header">
            <h1 id="header-title-one">Where's</h1> <h1 id="header-title-two">Waldo?</h1>
            <img id="header-icon" src={Icon} alt="Waldo's face"></img>
        </div>
    )
}

export default Header