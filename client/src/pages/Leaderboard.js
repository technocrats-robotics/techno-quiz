import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeaderQuiz from "../components/QuizPage/HeaderQuiz";
import Ranking from "../components/LeaderBoard/Ranking";

function Leaderboard() {
    return (
        <Box
            sx={{
                background:
                    "linear-gradient(145deg,rgba(0,9,53,1),rgba(8,0,101,1))",
                height: "100vh",
                color: "white",
            }}
        >
            <HeaderQuiz />
            <Container sx={{
              py: "6rem"
            }}>
                <Typography
                    variant="h4"
                    component="h3"
                    fontSize={}
                    sx={{
                        textAlign: "center",
                        paddingTop: "2rem",
                    }}
                >
                    LEADERBOARD
                </Typography>
            </Container>
        </Box>
    );
}

export default Leaderboard;
