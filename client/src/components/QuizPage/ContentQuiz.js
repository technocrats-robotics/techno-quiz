import { Box } from "@mui/material";
import React from "react";
import Objective from "./Questions/Objective";

function ContentQuiz({ questions }) {
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
                    <Objective key={idx} question={question} index={idx + 1} />
                ))}
        </Box>
    );
}

export default ContentQuiz;
