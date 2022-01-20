import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Answer from "./Answer";

function Objective({ question, index, quizId, userAttempt, setUserAttempt }) {
    const [selectedAnswer, setSelectedAnswer] = useState(0);
    return (
        <Box
            sx={{
                margin: {
                    xs: "1.5rem",
                    sm: "3rem",
                },
                background:
                    "linear-gradient(145deg, black, rgba(0, 54, 103, 0), rgba(0,73,141, 0.7))",
                borderRadius: "2rem",
                paddingTop: {
                    xs: "2.5rem",
                    sm: "4rem",
                },
                paddingLeft: {
                    xs: "1.5rem",
                    sm: "4rem",
                },
                paddingRight: {
                    xs: "1.5rem",
                    sm: "4rem",
                },
                paddingBottom: "3rem",
                border: "0.5px solid rgba(125,125,125, 0.5)",
                fontSize: {
                    xs: "1rem",
                    sm: "3rem",
                },
            }}
        >
            <Typography
                variant="h4"
                component="h3"
                sx={{
                    marginBottom: "1.5rem",
                }}
                fontSize={{
                    xs: "1.5rem",
                    sm: "2rem",
                }}
            >
                Question No - {index}
            </Typography>
            <Typography
                variant="h6"
                component="p"
                sx={{
                    fontWeight: "normal",
                }}
                fontSize={{
                    xs: "1rem",
                    sm: "1.2rem",
                }}
                textAlign={"justify"}
            >
                {question.statement}
            </Typography>
            <Container
                maxWidth="xl"
                sx={{
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                }}
            >
                <Grid container spacing={4} alignItems="stretch">
                    {question.options.map((option, idx) => (
                        <Grid item xl={6} lg={6} xs={12}>
                            <Answer
                                userAttempt={userAttempt}
                                setUserAttempt={setUserAttempt}
                                key={idx}
                                questionId={question.id}
                                option={option}
                                index={idx + 1}
                                questionIndex={index}
                                selectedAnswer={selectedAnswer}
                                setSelectedAnswer={setSelectedAnswer}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Objective;
