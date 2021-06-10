import React from "react";
import { Link } from "react-router-dom";
import logoCoffee from "../images/logoCoffee.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logoCoffee} alt="logo coffee" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
