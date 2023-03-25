import { arrayUnion, doc, updateDoc, } from "@firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";

const Modal = ({ gameOver, matchId, timer }) => {
    const [ data, setData ] = useState([])
    const getDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = mm +'/'+ dd +'/'+ yyyy;
    return today
    }
    const submitHandler = async () => {
        const ref = doc(db, 'scores', matchId.id)
        await updateDoc(ref, {data: arrayUnion( { data: data})})
        console.log(data)
    }

    if (gameOver) {
        return (
            <div className="modal">
                <div className="modal-text">
                    <span>You finished in <span id="modal-timer">{timer}</span> second(s)!</span>
                    <span>Enter your name to be put on the leaderboard:</span>
                    <input type='text' onChange={(e) => setData({name: e.target.value, time: timer, date: getDate() })}></input>
                    <div className="modal-buttons">
                        <Link to="/leaderboard">
                            <div>
                                <button className="submit-button" onClick={submitHandler}>Submit</button>
                            </div>
                        </Link>
                        <Link to="/">
                            <div>
                                <button className="submit-button">Cancel</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal