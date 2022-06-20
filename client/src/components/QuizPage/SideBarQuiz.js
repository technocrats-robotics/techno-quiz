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
import { useUploadAnswersMutation } from "../../app/services/api";
import { useNavigate, useParams } from "react-router-dom";
import { selectAnswers } from "../../features/Answers/answerSlice";
import { useSelector } from "react-redux";
import { store } from "../../app/store";
import SubmitModal from "../SubmitModal";

function SideBarQuiz({ data }) {
    const navigator = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);
    const { quizId } = useParams();
    const [upload, { isLoading }] = useUploadAnswersMutation();
    const [confirm, setIsConfirm] = React.useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        // <SubmitModal openState={true} closeState={false} />;
        // setIsOpen(!isOpen);

        // if (setIsConfirm === true) {
        try {
            const answers = store.getState().answers.answers;
            console.log("answer state", store.getState().answers);
            const response = await upload({ quizId, answers }).unwrap();
            console.log("response", response);
            alert("Success");
            navigator("/user");
        } catch (err) {
            console.log(err);
            alert("error");
        }
        // }
    };

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
            {/* <SubmitModal openState={true} closeState={false} /> */}
            <SubmitModal
                openState={isOpen}
                setIsOpen={setIsOpen}
                setIsConfirm={setIsConfirm}
                handleConfirm={handleSubmit}
            />
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
                <Timer data={data} />
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "rgba(255,0,0,1)",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        marginTop: "1.5rem",
                        marginLeft: "0.7rem",
                        marginRight: "0.7rem",
                        borderRadius: "1.5rem",
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Submit Attempt!
                </Button>
                {/* <QuestionProgress/> */}
            </Box>
        </Box>
    );
}

export default SideBarQuiz;
