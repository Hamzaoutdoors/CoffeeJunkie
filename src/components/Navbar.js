import React from "react";
import { Link } from "react-router-dom";
import logoCoffee from "../images/logoCoffee.svg";
import { FaCoffee } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { setSearchTarget, openSidebar } = useGlobalContext();

  const coffee = () => {
    setSearchTarget(true);
  };
  const products = () => {
    setSearchTarget(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaCoffee />
          </button>
        </div>
        <Link to="/">
          <img src={logoCoffee} alt="logo coffee" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={coffee}>
              <a className="link-btn">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a className="link-btn">About</a>
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={products}>
              <a className="link-btn">Products</a>
            </Link>
          </li>
          <li>
            <Link to="/basket" onClick={products}>
              <a className="link-btn">Basket</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
