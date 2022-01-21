import React from "react";
import "../styles/dept.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <img src={Logo} className="logo" alt="" />
                <ul className="links-container">
                    <li className="link-item">
                        <Link to="/" className="link">
                            Home
                        </Link>
                    </li>
                    <li className="link-item">
                        <Link to="/about" className="link">
                            About Us
                        </Link>
                    </li>
                    <li className="link-item">
                        <Link to="/connect" className="link">
                            Connect With Us
                        </Link>
                    </li>
                    <li className="link-item">
                        <Link to="/login" className="link-item1">
                            Log In
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
