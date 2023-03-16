import React from "react"
import { Link } from "react-router-dom"
import Scoreboard from "./scoreboard"

const Home = () => {
    return (
        <div className="home">
            <span className="home-text">How to Play: Find Waldo and his friends across 3 different images.</span>
            <span className="home-text">Try to get the fastest time to make it onto the leaderboard!</span>
            <div className="buttons">
                <div>
                    <Link to="/game"><button className="button">Start Game</button></Link>
                </div>
                <div>
                    <button className="button">Leaderboard</button>
                </div>
            </div>
        </div>
    )
}

export default Home