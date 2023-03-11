import React from "react"

const Header = ({gameStatus}) => {
    if (gameStatus === true) {
        return (
            <div className="header">
                <span>Characters</span>
            </div>
        )
    } else
    return (
        <div className="header">
            <h2>Where's Waldo</h2>
        </div>
    )
}

export default Header