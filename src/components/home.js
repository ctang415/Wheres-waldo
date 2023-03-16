import React from "react"
import Scoreboard from "./scoreboard"

const Home = ({startClickHandler}) => {
    return (
        <div className="home">
            <span className="home-text">How to Play: Find Waldo and his friends across 3 different images.</span>
            <span className="home-text">Try to get the fastest time to make it onto the leaderboard!</span>
            <div className="buttons">
                <div>
                    <button className="button" onClick={startClickHandler}>Start Game</button>
                </div>
                <div>
                    <button className="button">Leaderboard</button>
                </div>
            </div>
        </div>
    )
}

export default Home