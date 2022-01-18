import React from "react";
import { Box, Button } from "@mui/material";

// Components imports
import DepartmentQuiz from "./DepartmentQuiz";
import Timer from "../Timer";

// Logo imports
import GeneralRoboticsLogo from "../Icons/generalRobotics.svg";
import ElectricalLogo from "../Icons/electricalLogo.svg";
import CsLogo from "../Icons/csLogo.svg";
import MechanicalLogo from "../Icons/mechanicalLogo.svg";
import QuestionProgress from "./QuestionProgress";

function SideBarQuiz() {
    return (
        <Box
            sx={{
                position: "static",
                width: "20vw",
                backgroundColor: "#080136",
                color: "white",
                borderRight: "1px solid #eee",
            }}
            display={{
                xs: "none",
                md: "block",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    height: "100%",
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
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "rgba(255,0,0,1)",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        marginTop: "1.5rem",
                        marginLeft: "0.7rem",
                        marginRight: "0.7rem",
                        borderRadius: "1.5rem"
                    }}
                    onClick={() => {}}
                >
                    Submit Attempt!
                </Button>
                {/* <QuestionProgress/> */}
            </Box>
        </Box>
    );
}

export default SideBarQuiz;
