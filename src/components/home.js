import React from "react"
import { Link } from "react-router-dom"

const Home = ({ gameData }) => {
    return (
        <div className="home">
            <div className="home-text"> 
                <div>How to Play: Find Waldo and his friends across 3 different images.</div>
                <div>Try to get the fastest time to make it onto the leaderboard!</div>
            </div>
            <div className="home-levels">
                {gameData.map(item => {
                    return (
                        <div key={item.name} className="home-level">
                            <div className="home-level-images">
                                <Link to={`game/${item.name}`}>
                                    <img className="home-level-image" src={item.url} alt="Pictures of characters"></img>
                                </Link>
                            </div>
                            <div className="home-level-text">
                                <Link to={`game/${item.name}`}>
                                    {item.name}
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="buttons">
                    <Link to="/leaderboard">
                        <button className="leader-button">Leaderboard</button>
                    </Link>
            </div>
        </div>
    )
}

export default Home