import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img className="navbar-world-logo"
            src="src/assets/3-d-global-technology-logo-very-luxury-elegant_1075284-52-removebg-preview.png"
            alt=""
          />
        </a>
        <ul className="navbar-menu ">
          <li className="navbar-item">
            <a href="/Home" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/About Us" className="navbar-link">
              About Us
            </a>
          </li>
          <li className="navbar-item">
            <a href="/Services" className="navbar-link">
              Services
            </a>
          </li>

          <li className="navbar-item">
            <a href="/Products" className="navbar-link">
              Products
            </a>
          </li>
          <li className="navbar-item">
            <a href="/Blog" className="navbar-link">
              Blog
            </a>
          </li>
          <li className="navbar-item">
            <a href="/Contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
