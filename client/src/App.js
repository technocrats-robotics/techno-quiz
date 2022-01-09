import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    root:{
        // remove margin and padding
        margin: 0,
        padding: 0,
    }
})


function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ReactNotification />
            <Router>
                <div className="app__body">
                    <Routes>
                        <Route
                            exact
                            path="/landing"
                            element={<LandingPage />}
                        />
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/department/:id" element={<Department />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/user" element={<UserDashboard/>} />
                        <Route exact path="/admin" element={<AdminDashboard/>} />
                        <Route exact path="/quiz" element={<QuizPage />} />
                        <Route
                            exact
                            path="/leaderboard"
                            element={<Leaderboard />}
                        />
                        {/* Admin routes */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}


export default App;
