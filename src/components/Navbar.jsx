import React from 'react'
import './Styles/Navbar.css'  


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="leftSide">
        <h1><span className='letter'>T</span>yron</h1>
        </div>
        <div className="rightSide">
            <ul>
                <li className='link'>Acceuil</li>
                <li className='link'>A Propos</li>
                <li className='link'>Compétences</li>
                <li className='link'>Parcours</li>
                <li className='link'>Projets</li>
                <li className='link'>Experiences</li>
                <li className='link'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar