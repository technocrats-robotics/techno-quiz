import React from "react";
import ContentQuiz from "../components/QuizPage/ContentQuiz";
import { Box } from "@mui/material";
import HeaderQuiz from "../components/QuizPage/HeaderQuiz";
import SideBarQuiz from "../components/QuizPage/SideBarQuiz";
function QuizPage() {
    return (
        <Box
        // sx={{
        //     height: "100vh",
        // }}
        >
            <HeaderQuiz />
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
        </Box>
    );
}

export default QuizPage;
