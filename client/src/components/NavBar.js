import '../App.css'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import React from 'react'

function NavBar() {
    return (
        <nav className="navBar">
          <img src={logo} alt="Technocrats Logo" className="logo"/>
          <div className="navButtons">
          <Link to="/" className="links">
            Homepage
          </Link>
          <Link to="/about" className="links">
            About Us
          </Link>
          <Link to="/connect" className="links">
            Connect with Us
          </Link>
          <Link to="/login" className="loginButton">
            Login
          </Link>
          </div>
        </nav>
    )
}

export default NavBar
