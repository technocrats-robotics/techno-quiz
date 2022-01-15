import { Box, Typography } from "@mui/material";
import React from "react";
import Timer from "../Timer";
import DepartmentQuiz from "./DepartmentQuiz";

function SidebarXS() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                width: "100vw",
                height: "100vh",
                backgroundColor: "#080136",
                color: "white",
                borderRight: "1px solid #eee",
            }}
        >
            <Typography>THIS IS SIDEBAR FOR XS</Typography>
        </Box>
    );
}

export default SidebarXS;
