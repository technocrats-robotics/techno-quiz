import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Answer() {
    return (
        <Box
            sx={{
                border: "2px solid rgba(125,125,125,0.75)",
                padding: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                borderRadius: "1.5rem",
                height: "100%",
                width: "calc(100% - 3rem)",
                display: "flex",
                alignItems: "center",
                background: "#050430",
                overflow: "hidden",
                ":hover": {
                    background: "rgba(0,33,151,0.51)",
                    border: "2px solid rgba(0,224,255,1)",
                },
            }}
        >
            <Typography variant="h5" component="p">
                A) component
            </Typography>
        </Box>
    );
}

export default Answer;
