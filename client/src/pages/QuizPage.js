import React, { useState } from "react";
import ContentQuiz from "../components/QuizPage/ContentQuiz";
import { Box } from "@mui/material";
import HeaderQuiz from "../components/QuizPage/HeaderQuiz";
import SideBarQuiz from "../components/QuizPage/SideBarQuiz";
import SidebarXS from "../components/QuizPage/SidebarXS";
function QuizPage() {
    const [hamburger, setHamburger] = useState(false);
    return (
        <Box>
            <HeaderQuiz setHamburger={setHamburger} hamburger={hamburger} />
            <Box
                sx={{
                    display: "flex",
                    minHeight: "100vh",
                    height: "100%",
                }}
            >
                <SideBarQuiz />
                <ContentQuiz />
            </Box>
            {hamburger && <SidebarXS />}
        </Box>
    );
}

export default QuizPage;
