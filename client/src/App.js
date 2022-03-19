import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



import Box from "@mui/material/Box";
// pages
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboad";
import AdminDashboard from "./pages/AdminDashboard";
import AddQuiz from "./pages/AddQuiz";
import AddQues from "./pages/AddQues";
import ManageQuiz from "./pages/ManageQuiz";
import ModifyQuiz from "./pages/ModifyQuiz";
import ModifyDeptQuiz from "./pages/ModifyDeptQuiz";
import ManageQues from "./pages/ManageQues";
import FinalQuiz from "./pages/FinalQuiz";
import QuizPage from "./pages/QuizPage";
import Leaderboard from "./pages/Leaderboard";
import ScheduleQuiz from "./pages/ScheduleQuiz";
import LandingPage from "./pages/LandingPage";
import Department from "./pages/Department";
import About from "./pages/About";

import AuthModal from "./components/AuthModal/AuthModal";
// import TestingPage from "./pages/TestingPage";

function App() {
    return (
        <>
            {/* <ReactNotification /> */}
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
                        <Route
                            exact
                            path="/addquiz"
                            element={<AddQuiz />}
                        />
                        <Route exact path="/addquiz/:quizid" element={<FinalQuiz />} />
                        <Route exact path="/addques" element={<AddQues />} />
                        <Route exact path="/managequiz" element={<ManageQuiz />} />
                        <Route exact path="/modifyquiz" element={<ModifyQuiz />} />
                        <Route exact path="/modifyquiz/:deptid" element={<ModifyDeptQuiz />} />
                        <Route exact path="/manageques" element={<ManageQues />} />
                        <Route exact path="/schedulequiz/:quizid" element={<ScheduleQuiz />} />
                        <Route
                            exact
                            path="/quiz/:quizId"
                            element={<QuizPage />}
                        />
                        <Route
                            exact
                            path="/leaderboard/:quizId"
                            element={<Leaderboard />}
                        />
                        {/* Admin routes */}

                        <Route path="/login" element={<AuthModal />} />
                        {/* <Route path="/test" element={<TestingPage />} /> */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Box>
            </Router>
        </>
    );
}

export default App;
