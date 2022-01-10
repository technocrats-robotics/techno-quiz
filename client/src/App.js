import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import store from './store';

// Notifications
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
// pages
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboad";
import AdminDashboard from "./pages/AdminDashboard";
import QuizPage from "./pages/QuizPage";
import Leaderboard from "./pages/Leaderboard";
import LandingPage from "./pages/LandingPage";
import Department from "./pages/Department";
import About from "./pages/About";

class App extends React.Component {

    componentDidMount() {
      if (localStorage.getItem('_ID')) {
        axios.get(`/api/users/${localStorage.getItem('userID')}`).then(res => {
        })
      }
    }
render(){
    return (
        <div className="app">
            <ReactNotification />
            <Router>
                <div className="app__header">
                    <Link to="/">Homepage</Link>
                </div>
                <div className="app__body">
                    <Routes>
                        <Route
                            exact
                            path="/landing"
                            element={<LandingPage />}
                        />
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/auth" element={<Login />} />
                        <Route exact path="/department" element={<Department />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/user" element={UserDashboard} />
                        <Route exact path="/admin" element={AdminDashboard} />
                        <Route exact path="/quiz" element={QuizPage} />
                        <Route
                            exact
                            path="/leaderboard"
                            element={Leaderboard}
                        />
                        {/* Admin routes */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}
}

export default App;
