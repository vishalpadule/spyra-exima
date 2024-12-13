import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; // Make sure Link is imported from react-router-dom

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            className="navbar-world-logo"
            src="src/assets/3-d-global-technology-logo-very-luxury-elegant_1075284-52-removebg-preview.png"
            alt="Logo"
          />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link"> {/* Ensure proper path format */}
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/products" className="navbar-link">
              Products
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link">
              Blog
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link"> {/* Fix to use Link */}
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
