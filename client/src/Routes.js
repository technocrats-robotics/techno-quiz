import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

// Notifications
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

// pages
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import UserDashboard from './pages/UserDashboard'

//Components

import NavBar from './components/NavBar'

function RoutesComp() {
  return (
    <div className="app">
      <ReactNotification />
      <Router>
        <div className="app__body">
        <Routes>

            <Route exact path="/" element={<><NavBar/><Homepage/></>}/>
            <Route exact path="/userDashboard" element={<UserDashboard />}/>  {/*This route is added just for testing purpose, later on user will come here through login */}
            {/* <Route exact path="/login" element={<Login/>}/> */}
            {/* <Route exact path="/adminLogin" element={<Login/>}/> */}
            {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
            
            {/* -------------  404 Not Found Route ----------------- */}

            <Route path="*" element={<><NavBar/><NotFound/></>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default RoutesComp;