import React from 'react'
import './Styles/Homepage.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { FaArrowCircleDown } from "react-icons/fa";


const Homepage = () => {
  const [text] = useTypewriter({
    words: [' Developpeur Web !', ' Developpeur jeux videos !', ' passionné d informatique !'],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 40,
  });
  return (
    <div className="welcome">
        <div className="leftSide">
            <h1>Bonjour, <br></br> je suis <span className='orange'>Tyron</span></h1>
            <h5>
              Je suis un 
              <span style={{fontWeight: 'bold', color: '#FFA553'}}>
                {text}
              </span>
              <span style={{color: '#FFA553'}}><Cursor/></span>
              
            </h5>
            <a href="#About">A Propos <FaArrowCircleDown /></a>
        </div>

        <div className="rightSide">
            <img src="img/me.jpg" alt="" />
        </div>
    </div>
  )
}

export default Homepage