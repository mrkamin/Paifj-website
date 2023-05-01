import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const options = ["EN", "PR", "PA"];

  return (
    <>
      <nav>
        <img src="../images/logo.png" alt="" className="logo" />
        <div
          className={navbar ? "navbar" : "navMe"}
        >
          
            <ul className="navContainer">
              <li>
                <Link className="navLink" to="/getinformed">
                  GET INFORMED
                </Link>
              </li>
              <li>
                <Link className="navLink" to="/ouractions">
                  OUR ACTIONS
                </Link>
              </li>
              <li>
                <Link className="navLink" to="/getinvolved">
                  GET INVOLVED
                </Link>
              </li>
              <li>
                <Link className="navLink" to="/aboutus">
                  ABOUT US
                </Link>
              </li>
              <li className="makeDonation">
                <Link className="mDoLink" to="/">
                  MAKE A DONATION
                </Link>
              </li>
            </ul>
          
          <select className="dropdownlist">
            {options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <button className="humberger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          ) : (
            <button className="xHumberger">
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
