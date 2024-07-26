import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="/external/firei164-psmw.svg"
        alt="fireI164"
        className="navbar-fire"
      />
      <div className="navbar-element">
        <Link to="/" className="navbar-link NavigationbarFontdesktop">
          Home
        </Link>
      </div>
      <div className="navbar-element">
        <Link to="/about" className="navbar-link NavigationbarFontdesktop">
          About
        </Link>
      </div>
      <div className="navbar-element">
        <Link to="/experience" className="navbar-link NavigationbarFontdesktop">
          Experience
        </Link>
      </div>
      <div className="navbar-element">
        <Link to="/projects" className="navbar-link NavigationbarFontdesktop">
          Projects
        </Link>
      </div>
      <div className="navbar-element">
        <Link to="/contact" className="navbar-link NavigationbarFontdesktop">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
