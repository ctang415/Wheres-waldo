import { collection, doc, getDocs, getDoc, orderBy, query, limit, where, documentId } from "@firebase/firestore"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { db } from "../firebase-config"
import Data from "./Data"

const Leaderboard = ( {gameData} ) => {
    const [ scores, setScores ] = useState([])
    const [ data, setData ] = useState([])
/*
    useEffect(() => {
        const getQuery = async (e) => {
            const ref = doc(db, 'scores', e.target.id)
            const querySnapshot = await getDoc(ref);
                const data = querySnapshot.data()
                setScores(data)
        }
        getQuery()
      }, [])
*/

      const handleClick = async (e) => {
        const ref = doc(db, 'scores', e.target.id)
        const querySnapshot = await getDoc(ref)
            const data = querySnapshot.data()
            setData(data)
            let newArray = Object.values(data).map(item => item.sort( (a, b ) => parseInt(a.data.time) - parseInt(b.data.time)))
            console.log(newArray)
            setScores(newArray)
      }
/*
      const handleClick = async (e) => {
        const ref = collection(db, 'scores')
        const q = query(ref, where('name', "==", e.target.id), orderBy('time'))
        const querySnapshot = await getDoc(q)
        const data = querySnapshot.data()
        setScores(data)
        console.log(data)
      }
      */

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