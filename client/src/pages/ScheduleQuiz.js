import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Content from "../components/Admin/Quiz/ScheduleQuiz";
import Header from "../components/Admin/Header";
import SideBar from "../components/Admin/Sidebar";
import { useGetAvailableQuestionsQuery } from "../app/services/api";

function ScheduleQuiz() {
    const { dept, quizid } = useParams();
    const [hamburger, setHamburger] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const { data, isLoading, isSuccess } = useGetAvailableQuestionsQuery(dept);
    return (
        <Box>
            <Header setHamburger={setHamburger} hamburger={hamburger} />
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
                <SideBar />
                {isSuccess && !isLoading && (
                    <Content ques={[data.data, quizid]} />
                )}
            </Box>
        </Box>
    );
}

export default ScheduleQuiz;
