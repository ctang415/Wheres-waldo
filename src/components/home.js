import React from "react"

const Home = ({startClickHandler}) => {
    return (
        <div className="home">
            <span>Instructions</span>
            <button onClick={startClickHandler}>Start Game</button>
            <button>Leaderboard</button>
        </div>
    )
}

export default Home