import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Icon, HomeIcon } from "../assets"
import { db } from '../firebase-config';
import { getDocs, collection, query, where } from 'firebase/firestore'

const Header = ({location}) => {
    const [ characters, setCharacters ] = useState([])
    const path = location.pathname.substring(6)
      
    useEffect(() => {
        const getQuery = async () => {
            const q = query(collection(db, "levels"), where('name', '==', `${path}`))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setCharacters(characters => [...characters, doc.data()])
            }); 
        };
        setCharacters([])
        getQuery();
    }, [path])

    if (location.pathname.includes('game')) {
        return (
            <div className="header-true">
                <ul>
                    {characters.map(item => {
                        return (
                            item.characters.map(person => {
                                return (
                                    <li key={person.character}>
                                        <img src={person.image} alt="Waldo character"></img>
                                        <span>{person.character}</span>
                                    </li>
                                )
                            })
                        )
                    })}
                </ul>
                <span>Timer:</span>
                    <Link to="/">
                        <img id="header-true-icon" src={HomeIcon} alt="Home Icon"></img>
                    </Link>
            </div>
        )
    } else
        return (
            <div className="header">
                <Link to="/">
                    <div className="header-false">
                        <h1 id="header-title-one">Where's</h1> 
                        <h1 id="header-title-two">Waldo?</h1>
                        <img id="header-icon" src={Icon} alt="Waldo's face"></img>
                    </div>
                </Link>
            </div>
        )
    }

export default Header