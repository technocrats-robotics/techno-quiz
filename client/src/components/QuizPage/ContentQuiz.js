import { Box } from "@mui/material";
import React from "react";
import Objective from "./Questions/Objective";

function ContentQuiz() {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                backgroundColor: "#050022",
                color: "white",
                overflow: "hidden",
            }}
        >
            <Objective />
        </Box>
    );
}

export default ContentQuiz;
