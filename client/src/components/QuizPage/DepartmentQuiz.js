import { Box } from "@mui/material";
import React from "react";

function DepartmentQuiz({ name, icon }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: {
                    sm: "center",
                    lg: "space-around",
                },
                alignItems: "center",
                margin: "1rem",
                border: "1px solid rgba(125,125,125,0.5)",
                borderRadius: "1.5rem",
                padding: "0.5rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                background:
                    "linear-gradient(145deg, rgba(0, 0, 0, 1), rgba(10,0,123, 1))",
                ":hover": {
                    background:
                        "linear-gradient(145deg, rgba(4,17,104,1), rgba(8,0,100,1))",
                    border: "1px solid rgba(0,224,255,1)",
                },
            }}
            display={{}}
        >
            <img
                src={icon}
                width={50}
                style={{
                    padding: "0.6rem",
                }}
            />
            <Box
                component="span"
                display={{
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "block",
                }}
            >
                {name}
            </Box>
        </Box>
    );
}

export default DepartmentQuiz;
