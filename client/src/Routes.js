import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import logo from './images/logo.png';

// Notifications
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

// pages
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'

function RoutesComp() {
  return (
    <div className="app">
      <ReactNotification />
      <Router>
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

        <div className="app__body">
        <Routes>

            <Route exact path="/" element={<Homepage/>}/>
            {/* <Route exact path="/login" element={<Login/>}/> */}
            {/* <Route exact path="/adminLogin" element={<Login/>}/> */}
            {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
            
            {/* -------------  404 Not Found Route ----------------- */}

            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default RoutesComp;