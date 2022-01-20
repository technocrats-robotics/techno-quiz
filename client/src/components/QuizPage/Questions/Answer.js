import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswers } from "../../../features/Answers/answerSlice";
import produce from "immer";
function Answer({
    option,
    index,
    questionIndex,
    questionId,
    setUserAttempt,
    userAttempt,
    selectedAnswer,
    setSelectedAnswer,
}) {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        setUserAttempt(
            produce(userAttempt, (draftState) => {
                draftState.set(questionId, index);
            })
        );
        // dispatch(addAnswers(userAttempt));
        setSelectedAnswer(index);
        console.log(userAttempt);
    };
    return (
        <Box
            sx={{
                border:
                    userAttempt.get(questionId) === index
                        ? "2px solid rgba(0,224,255,1)"
                        : "2px solid rgba(125,125,125,0.75)",
                padding: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                borderRadius: "1.5rem",
                height: "100%",
                width: "calc(100% - 3rem)",
                display: "flex",
                alignItems: "center",
                background:
                    userAttempt.get(questionId) === index
                        ? "rgba(0,33,151,0.51)"
                        : "#050430",
                overflow: "hidden",
                ":hover": {
                    background: "rgba(0,33,151,0.51)",
                    border: "2px solid rgba(0,224,255,1)",
                },
            }}
            onClick={handleOnClick}
        >
            <Typography
                variant="h5"
                component="p"
                fontSize={{
                    xs: "1rem",
                    sm: "1.2rem",
                }}
            >
                {index} ) {option}
            </Typography>
        </Box>
    );
}

export default Answer;
