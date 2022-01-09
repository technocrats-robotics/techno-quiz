import React from "react";
import { Box } from "@mui/material";

// Components imports
import DepartmentQuiz from "./DepartmentQuiz";
import Timer from "../Timer";

// Logo imports
import GeneralRoboticsLogo from "../Icons/generalRobotics.svg";
import ElectricalLogo from "../Icons/electricalLogo.svg";
import CsLogo from "../Icons/csLogo.svg";
import MechanicalLogo from "../Icons/mechanicalLogo.svg";

function SideBarQuiz() {
    return (
        <Box
            sx={{
                position: "static",
                width: "20vw",
                height: "100vh",
                backgroundColor: "#080136",
                color: "white",
                overflowY: "hidden",
                borderRight: "1px solid #eee"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <DepartmentQuiz
                    name="General Robotics"
                    icon={GeneralRoboticsLogo}
                />
                <DepartmentQuiz name="Electrical" icon={ElectricalLogo} />
                <DepartmentQuiz name="Programming" icon={CsLogo} />
                <DepartmentQuiz name="Mechanical" icon={MechanicalLogo} />
                <Timer />
            </Box>
        </Box>
    );
}

export default SideBarQuiz;
