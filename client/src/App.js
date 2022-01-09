import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

// Notifications
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

// pages
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <ReactNotification />
      <Router>
        <div className="app__header">
          <Link to="/">
            Homepage
          </Link>
        </div>

        <div className="app__body">
        <Routes>

            <Route exact path="/" element={<Homepage/>}/>
            {/* <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
            <Route path="*" element={<NotFound/>}/>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;