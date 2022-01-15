import { Box, Typography } from "@mui/material";
import React from "react";
import Timer from "../Timer";
import DepartmentQuiz from "./DepartmentQuiz";
import GeneralRoboticsLogo from "../Icons/generalRobotics.svg";
import ElectricalLogo from "../Icons/electricalLogo.svg";
import CsLogo from "../Icons/csLogo.svg";
import MechanicalLogo from "../Icons/mechanicalLogo.svg";
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
                backgroundColor: "rgba(10,1,36,0.7)",
                backdropFilter: "blur(5px)",
                color: "white",
                borderRight: "1px solid #eee",
            }}
        >
            <Box
                sx={{
                    height: "60%",
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "1.5rem",
                }}
            >
                <DepartmentQuiz
                    name={"General Robotics"}
                    icon={GeneralRoboticsLogo}
                />
                <DepartmentQuiz name={"Electrical"} icon={ElectricalLogo} />
                <DepartmentQuiz name={"Programming"} icon={CsLogo} />
                <DepartmentQuiz name={"Mechanical"} icon={MechanicalLogo} />
            </Box>
        </Box>
    );
}

export default SidebarXS;
