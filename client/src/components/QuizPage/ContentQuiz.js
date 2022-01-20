import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswers } from "../../features/Answers/answerSlice";
import Objective from "./Questions/Objective";

function ContentQuiz({ questions, quizId }) {
    const dispatch = useDispatch();
    const [userAttempt, setUserAttempt] = useState(new Map());
    console.log(questions);

    
    return (
        <Box
            sx={{
                minHeight: "100vh",
                height: "100%",
                width: "100%",
                backgroundColor: "#050022",
                color: "white",
            }}
        >
            {questions &&
                questions.map((question, idx) => (
                    <Objective
                        key={idx}
                        quizId={quizId}
                        question={question}
                        index={idx + 1}
                        userAttempt={userAttempt}
                        setUserAttempt={setUserAttempt}
                    />
                ))}
        </Box>
    );
}

export default ContentQuiz;
