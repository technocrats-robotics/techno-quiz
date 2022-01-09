import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Answer() {
    return (
        <Box
            sx={{
                border: "1px solid white",
                padding: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                borderRadius: "1rem",
            }}
        >
            <Typography variant="h5" component="p">
                Answer component
            </Typography>
        </Box>
    );
}

export default Answer;
