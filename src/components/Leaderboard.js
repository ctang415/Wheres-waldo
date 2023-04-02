import { doc, getDoc, updateDoc } from "@firebase/firestore"
import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { db } from "../firebase-config"
import Data from "./Data"
const filter = require('leo-profanity');

const Leaderboard = ( { gameData } ) => {
    const [ scores, setScores ] = useState([])
    const location = useLocation()
    const from  = location.state

    useEffect(() => {
        if ( from !== null ) {
            const prevPath = Object.values(from)[0].pathname.substring(6)
            const getQuery = async (e) => {
                const ref = doc(db, 'scores', prevPath)
                const querySnapshot = await getDoc(ref);
                const data = querySnapshot.data()
                Object.values(data).map(item => 
                    item.forEach(element => 
                        element.data.name = filter.clean(element.data.name) 
                ))
                await updateDoc(ref, data)
                let newArray = Object.values(data).map(item => item.sort( (a, b ) => { 
                    return parseFloat(a.data.time) - parseFloat(b.data.time)
                }))
                setScores(newArray)
            }
            getQuery()
        } else {
            const getQuery = async (e) => {
                const ref = doc(db, 'scores', 'War')
                const querySnapshot = await getDoc(ref);
                const data = querySnapshot.data()
                let newArray = Object.values(data).map(item => item.sort( (a, b ) => {
                    return parseFloat(a.data.time) - parseFloat(b.data.time) 
                }))
                setScores(newArray)
            }
            getQuery()
        }
    }, [from])

    const handleClick = async (e) => {
        const ref = doc(db, 'scores', e.target.id)
        const querySnapshot = await getDoc(ref)
            const data = querySnapshot.data()
            let newArray = Object.values(data).map(item => item.sort( (a, b ) => {
                return parseFloat(a.data.time) - parseFloat(b.data.time)
            }))
            setScores(newArray)
    }

    return (
        <div className="leader">
            <div className="leader-text"> 
                Leaderboard
            </div>
        <div className="leader-top-display">
            <div className="leader-levels">
                {gameData.map(item => {
                    return (
                        <div key={item.name} className="leader-level">
                            <div className="leader-level-images">
                                    <img onClick={handleClick} id={item.name} className="leader-level-image" src={item.url} alt="Pictures of characters"></img>
                            </div>
                            <Link to={`../game/${item.name}`}>
                            <div className="leader-level-text">
                                {item.name}
                            </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="leader-data">
            <div className="leader-data-record">
                    <h2 className="column-one">Name</h2>
                    <h2 className="column-two">Time</h2>
                    <h2 className="column-three">Date</h2>
            </div>
            <Data scores={scores}/>
            </div>
        </div>
    </div>
    )
}

export default Leaderboard