import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-container">
        <ul className="header-options">
          <li className="nav-option">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-option">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-option">
            <Link className="nav-link" to="/features">
              Features
            </Link>
          </li>
          <li className="nav-option">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
