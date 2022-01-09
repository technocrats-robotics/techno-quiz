import React from "react";
import { Box } from "@mui/material";
import DepartmentQuiz from "./DepartmentQuiz";
import GeneralRoboticsLogo from "./Icons/generalRobotics.svg";
import ElectricalLogo from "./Icons/electricalLogo.svg";
import CsLogo from "./Icons/csLogo.svg";
import MechanicalLogo from "./Icons/mechanicalLogo.svg";

function SideBarQuiz() {
    return (
        <Box
            sx={{
                position: "fixed",
                width: "20vw",
                height: "100vh",
                backgroundColor: "#080136",
                color: "white",
            }}
        >
            <DepartmentQuiz
                name="General Robotics"
                icon={GeneralRoboticsLogo}
            />
            <DepartmentQuiz name="Electrical" icon={ElectricalLogo} />
            <DepartmentQuiz name="Computer Science" icon={CsLogo} />
            <DepartmentQuiz name="Mechanical" icon={MechanicalLogo} />
        </Box>
    );
}

export default SideBarQuiz;
