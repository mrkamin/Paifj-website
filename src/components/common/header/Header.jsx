import React, { useState } from 'react'
import Head from './Head'
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [navbar, setNavbar] = useState(false)

  return (
   <>
   <Head />
   <header>
    <div className="container paddingSmall">
        <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
                <li><Link to='/'>GET INFORMED</Link></li>
                <li><Link to='/'>OUR ACTIONS</Link></li>
                <li><Link to='/'>GET INVOLVED</Link></li>
                <li><Link to='/'>ABOUT US</Link></li>
                <li className='makeDonation'><Link to='/'>MAKE A DONATION</Link></li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
                 {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
        </nav>
    </div>
   </header>
   </>
  )
}

export default Header
