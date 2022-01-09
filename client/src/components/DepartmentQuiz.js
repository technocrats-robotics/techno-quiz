import { Box } from "@mui/material";
import React from "react";

function DepartmentQuiz({ name, icon }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <img src={icon} />
            {name}
        </Box>
    );
}

export default DepartmentQuiz;
