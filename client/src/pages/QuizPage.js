import React, { Suspense, useEffect, useState } from "react";
import ContentQuiz from "../components/QuizPage/ContentQuiz";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";

import HeaderQuiz from "../components/QuizPage/HeaderQuiz";
import SideBarQuiz from "../components/QuizPage/SideBarQuiz";
import SidebarXS from "../components/QuizPage/SidebarXS";
import { useGetQuestionsByIdQuery } from "../app/services/api";

import { setQuestions } from "../features/Answers/answerSlice";
import { useDispatch } from "react-redux";

function QuizPage() {
    const [hamburger, setHamburger] = useState(false);

    const { quizId } = useParams();
    console.log(quizId);

    const { data, isLoading } = useGetQuestionsByIdQuery(quizId);

    return (
        !isLoading && (
            <Box>
                <HeaderQuiz setHamburger={setHamburger} hamburger={hamburger} />
                <Box
                    sx={{
                        display: "flex",
                        minHeight: "100vh",
                        height: "100%",
                        paddingTop: {
                            xs: "4rem",
                            sm: "3rem",
                        },
                    }}
                >
                    <SideBarQuiz data={data} />
                    <Suspense fallback={<div>Loading</div>}>
                        <ContentQuiz
                            questions={data}
                            quizId={quizId}
                            isLoading={isLoading}
                        />
                    </Suspense>
                </Box>
                {hamburger && <SidebarXS />}
            </Box>
        )
    );
}

export default QuizPage;
