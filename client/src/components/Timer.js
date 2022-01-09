import { Box } from "@mui/material";
import React from "react";

function Timer() {
    return (
        <Box
            sx={{
                backgroundColor: "#FFFD18",
                margin: "1rem",
                height: "5rem",
                borderRadius: "2rem",
                textAlign: "center",
                lineHeight: "5rem",
                color: "black",
            }}
        >
            Time Component
        </Box>
    );
}

export default Timer;
