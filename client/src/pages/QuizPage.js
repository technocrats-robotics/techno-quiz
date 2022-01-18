import React, { Suspense, useEffect, useState } from "react";
import ContentQuiz from "../components/QuizPage/ContentQuiz";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";

import HeaderQuiz from "../components/QuizPage/HeaderQuiz";
import SideBarQuiz from "../components/QuizPage/SideBarQuiz";
import SidebarXS from "../components/QuizPage/SidebarXS";
import { useGetQuestionsByIdQuery } from "../app/services/api";

import { setQuestions } from "../features/Questions/questionSlice";
import { useDispatch } from "react-redux";

function QuizPage() {
    const [hamburger, setHamburger] = useState(false);
    const dispatch = useDispatch();
    const theme = useTheme();

    const { quizId } = useParams();
    console.log(quizId);

    const { data, isLoading } = useGetQuestionsByIdQuery(quizId);

    // const matches = useMediaQuery(theme.breakpoints.up("sm"));
    console.log(data);

    return (
        <Box>
            <HeaderQuiz setHamburger={setHamburger} hamburger={hamburger} />
            <Box
                sx={{
                    display: "flex",
                    minHeight: "100vh",
                    height: "100%",
                    paddingTop: {
                        xs: "4rem",
                        sm: "6rem",
                    },
                }}
            >
                <SideBarQuiz />
                <Suspense fallback={<div>Loading</div>}>
                    <ContentQuiz questions={data} isLoading={isLoading} />
                </Suspense>
            </Box>
            {hamburger && <SidebarXS />}
        </Box>
    );
}

export default QuizPage;
