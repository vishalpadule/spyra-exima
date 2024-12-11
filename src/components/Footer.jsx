import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="src/assets/3-d-global-technology-logo-very-luxury-elegant_1075284-52-removebg-preview.png" alt="Logo" width="100" />
          </div>
          <div className="footer-menu">
            <a href="/Home">Home</a> <a href="/About Us">About Us</a>
            <a href="/Services">Services</a>
            <a href="/Products">Products</a>
            <a href="/Blog">Blog</a>
            <a href="/Contact">Contact</a>
          </div>
          <div className="footer-socials">
                <img
                  src="src/assets/demo-2-icon-facebook-0001.webp"
                  href="https://www.facebook.com"
                  alt=""
                />
                <img
                  src="src/assets/demo-2-icon-instagram-0001@2x.webp"
                  href="https://www.instagram.com"
                  alt=""
                />
                <img
                  src="src/assets/demo-2-icon-twitter-new-0001@2x.webp"
                   href="https://www.twitter.com"
                  alt=""
                />
              
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2024 — Moneylicious Securities. All Rights Reserved.
            Disclaimer: Our blogs are not to be construed as investment advice.
            Trading and investing in the securities market carries risk. Please
            do your own due diligence or consult a trained financial
            professional before investing. Copyrighted and original content for
            your trading and investing needs.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
