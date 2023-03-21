import React from "react";

const Modal = ({modal, setModal, setGameOver, charactersFound, setCharactersFound }) => {
    const resetLevel = () => {
        setModal(false)
        setCharactersFound(charactersFound.map(person => person.name ? {...person, found: false} : person ))
        setGameOver(false)
    }
    if (modal) {
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