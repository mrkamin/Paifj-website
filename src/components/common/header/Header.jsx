import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
  const [navMe, setNavMe] = useState(false);
  const options = ["EN", "PR", "PA"];

  return (
    <>
      <nav>
        <img src="../images/logo.png" alt="" className="logo" />
        <div
          className={navMe ? "navMe" : "navbar"} 
        >
          
            <ul className="navContainer">
              <li onClick={() => setNavMe(false)}>
                <Link className="navLink" to="/getinformed">
                  GET INFORMED
                </Link>
              </li>
              <li onClick={() => setNavMe(false)}>
                <Link className="navLink" to="/ouractions">
                  OUR ACTIONS
                </Link>
              </li>
              <li onClick={() => setNavMe(false)}>
                <Link className="navLink" to="/getinvolved">
                  GET INVOLVED
                </Link>
              </li>
              <li onClick={() => setNavMe(false)}>
                <Link className="navLink" to="/aboutus">
                  ABOUT US
                </Link>
              </li>
              <li className="makeDonation" onClick={() => setNavMe(false)}>
                <Link className="mDoLink" to="/">
                  MAKE A DONATION
                </Link>
              </li>
            </ul>
          
          <select className="dropdownlist">
            {options.map((option) => (
              <option value={option} key={option} >
                {option}
              </option>
            ))}
          </select>
          
  <li className="social-icon-li">
    <a href="https://www.facebook.com/PAIFJ2023/" target="_blank" rel="noopener noreferrer" onClick={() => setNavMe(false)}>
      <FontAwesomeIcon icon={faFacebook} className="social-icon" />
    </a>
    <a href="https://twitter.com/paifj2023" target="_blank" rel="noopener noreferrer" onClick={() => setNavMe(false)}>
      <FontAwesomeIcon icon={faTwitter} className="social-icon" />
    </a>
  </li>
        </div>
        <div onClick={() => setNavMe(!navMe)} >
          {navMe ? (
            <button className="xHumberger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          ) : (
            <button className="humberger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
