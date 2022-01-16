import React, { useState } from "react";
import ContentQuiz from "../components/QuizPage/ContentQuiz";
import { Box, useMediaQuery, useTheme } from "@mui/material";


import HeaderQuiz from "../components/QuizPage/HeaderQuiz";
import SideBarQuiz from "../components/QuizPage/SideBarQuiz";
import SidebarXS from "../components/QuizPage/SidebarXS";




function QuizPage() {
    const [hamburger, setHamburger] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
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
                <ContentQuiz />
            </Box>
            {hamburger && <SidebarXS />}
        </Box>
    );
}

export default QuizPage;
