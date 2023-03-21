import React, { useEffect } from "react";
import { useNavigate } from "react-router";


const Modal = ({ gameOver, setGameOver, charactersFound, setCharactersFound }) => {
    const navigate = useNavigate()
    const resetLevel = () => {
        setCharactersFound(charactersFound.map(person => person.name ? {...person, found: false} : person ))
        setGameOver(false)
        document.body.style.overflow = "scroll"
        navigate('/leaderboard')
    }

    useEffect(() => {
        if (gameOver) {
        document.body.style.overflow = "hidden";
        } 
    });

    if (gameOver) {
    return (
        <div className="modal">
            <div className="modaltext">
                <span>You win!</span>
                <div>
                    <button className="button" onClick={resetLevel}>Submit</button>
                </div>
            </div>
        </div>
    )
    }
}

export default Modal