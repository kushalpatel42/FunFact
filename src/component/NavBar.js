import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
       <nav className="nav-wrapper red darken-3" >
 <div className="continer">
        <a href="_" className='brand-logo'>
            Fun Fact
        </a>
        <ul className="right">
            <li> <Link to="/fact1"> Dolphin </Link></li>
            <li> <Link to="/fact2"> Lobster </Link></li>
            <li> <Link to="/fact3"> Octopuses</Link></li>
        </ul>
    </div> 
       </nav>
    )
}

export default NavBar
