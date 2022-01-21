import React from "react";
import "../styles/dept.css"
import Logo from "../img/logo.png"
function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <img src={Logo} className="logo" alt="" />
        <ul className="links-container">
          <li className="link-item">
            <a href="/" className="link">
              Home
            </a>
          </li>
          <li className="link-item">
            <a href="/about" className="link">
              About Us
            </a>
          </li>
          <li className="link-item">
            <a href="/connect" className="link">
              Connect With Us
            </a>
          </li>
          <li className="link-item1" >
            <a href="/login" className="link">
              Log In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
