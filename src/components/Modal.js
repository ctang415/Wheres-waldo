import { arrayUnion, doc, updateDoc, } from "@firebase/firestore";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { db } from "../firebase-config";

const Modal = ({ gameOver, matchId, timer }) => {
    const [ color, setColor ] = useState(false)
    const [ data, setData ] = useState([])
    const pathName = useLocation();

    const getDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = mm +'/'+ dd +'/'+ yyyy;
    return today
    }
    
    const submitHandler = async (e) => {
        if (data.name === undefined) {
            setColor(true)
            return e.preventDefault()
        }
        setColor(false)
        const ref = doc(db, 'scores', matchId.id)
        await updateDoc(ref, {data: arrayUnion( { data: data })})
    }

    if (gameOver) {
        return (
            <div className="modal">
                <div className="modal-text">
                    <span>You finished in <span id="modal-timer">{timer}</span> second(s)!</span>
                    <span>Enter your name to be put on the leaderboard:</span>
                    <input className={ color ? 'input-false' : 'input-true'} type='text' maxLength="10" onChange={(e) => setData( { name: e.target.value, time: timer, date: getDate() })}></input>
                    <div className="modal-buttons">
                        <Link to="/leaderboard" state={{ from: pathName }}>
                            <div>
                                <button className="submit-button" onClick={submitHandler}>Submit</button>
                            </div>
                        </Link>
                        <Link to="/">
                            <div>
                                <button className="submit-button" onClick={(e) => setColor(false)}>Cancel</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal