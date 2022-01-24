import React, { useRef, useState } from "react";
import "../styles/dept.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal/AuthModal";

import { Slide } from "@mui/material";

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef();
    return (
        <>
            <header onClick={(e) => e.stopPropagation()}>
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
                            <a
                                onClick={() => setIsActive(true)}
                                className="link-item1"
                            >
                                Log In
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            {isActive && (
                <Slide direction="up" mountOnEnter unmountOnExit>
                    <AuthModal />
                </Slide>
            )}
        </>
    );
}

export default Navbar;
