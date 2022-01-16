import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Notifications
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import Box from "@mui/material/Box";
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
import TestingPage from "./pages/TestingPage";
<<<<<<< HEAD
=======

import TestPage from "./pages/TestPage";
>>>>>>> d0b37fc0d26fd1685a472ea24e07417497d6510b

function App() {
    return (
        <>
            <ReactNotification />
            <Router>
                <Box
                    sx={{
                        minHeight: "100%",
                    }}
                >
                    <Routes>
                        <Route
                            exact
                            path="/landing"
                            element={<LandingPage />}
                        />
                        <Route exact path="/" element={<Homepage />} />
                        <Route
                            exact
                            path="/department/:id"
                            element={<Department />}
                        />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/user" element={<UserDashboard />} />
                        <Route
                            exact
                            path="/admin"
                            element={<AdminDashboard />}
                        />
                        <Route exact path="/quiz" element={<QuizPage />} />
                        <Route
                            exact
                            path="/leaderboard"
                            element={<Leaderboard />}
                        />
                        {/* Admin routes */}
                        <Route exact path="/test" element={<TestingPage />} />

                        

                        <Route path="/test" element={<TestPage/>} />
                        <Route path="*" element={<NotFound />} />
                       
                    </Routes>
                </Box>
            </Router>
        </>
    );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> d0b37fc0d26fd1685a472ea24e07417497d6510b
