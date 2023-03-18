import React from "react"
import { Link } from "react-router-dom"
import Scoreboard from "./scoreboard"

const Home = ({gameData}) => {
    return (
        <div className="home">
            <span className="home-text">How to Play: Find Waldo and his friends across 3 different images.</span>
            <span className="home-text">Try to get the fastest time to make it onto the leaderboard!</span>
            <div className="home-levels">
                {gameData.map(item => {
                    return (
                        <div key={item.name} className="home-level">
                            <div className="home-level-images">
                                <img className="home-level-image" src={item.url} alt="Pictures of characters"></img>
                            </div>
                            <div className="home-level-text">
                                {item.name}
                            </div>
                        </div>
                    )
                })}
            </div>
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