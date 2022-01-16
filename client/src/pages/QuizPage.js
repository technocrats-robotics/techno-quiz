import React from "react";
import ContentQuiz from "../components/QuizPage/ContentQuiz";
import { Box } from "@mui/material";
import HeaderQuiz from "../components/QuizPage/HeaderQuiz";
import SideBarQuiz from "../components/QuizPage/SideBarQuiz";
import QuestionProgress from "../components/QuizPage/QuestionProgress"
function QuizPage() {
    return (
        <Box>
            <HeaderQuiz />
            <Box
                sx={{
                    display: "flex",
                    
                }}
            >
                <SideBarQuiz />
                <ContentQuiz />
            </Box>
        </Box>
    );
}

export default QuizPage;
