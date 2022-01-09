import { Box } from "@mui/material";
import React from "react";

function DepartmentQuiz({ name, icon }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "1rem",
                boxShadow: "0px 1px white",
                borderRadius: "1.5rem",
                padding: "0.5rem",
                paddingLeft: "1rem",
                paddingRight: "1.5rem",
            }}
        >
            <img src={icon} width={60} />
            {name}
        </Box>
    );
}

export default DepartmentQuiz;
