import { doc, getDoc } from "@firebase/firestore"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { db } from "../firebase-config"
import Data from "./Data"

const Leaderboard = ( {gameData} ) => {
    const [ scores, setScores ] = useState([])
/*
    useEffect(() => {
        const getQuery = async () => {
        const ref = doc(db, 'scores', matchId.id)
        const querySnapshot = await getDocs(ref);
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            setScores(scores => [...scores, data])
            console.log(doc.id, " => ", doc.data());
          });
        }
      }, [])
*/

      const handleClick = async (e) => {
        const ref = doc(db, 'scores', e.target.id)
        const querySnapshot = await getDoc(ref);
            const data = querySnapshot.data()
            setScores(data)
            console.log('sent')
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