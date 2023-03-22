import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ gameOver }) => {

    if (gameOver) {
        return (
            <div className="modal">
                <div className="modaltext">
                    <span>You win!</span>
                    <div>
                        <Link to="/leaderboard">
                            <button className="button">Submit</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal