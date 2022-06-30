import {
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    RadioGroup,
    Radio,
    FormControlLabel,
    Snackbar,
    Alert,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import Badge from "../Badge";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAddQuestionMutation } from "../../../app/services/api";
import produce from "immer";

const departments = [
    { value: "electrical", label: "Electrical" },
    { value: "robotics", label: "General Robotics" },
    { value: "programming", label: "Programming" },
    { value: "mechanical", label: "Mechanical" },
];

const answers = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
    { value: "option 4", label: "option 4" },
];

const FTypography = withStyles({
    root: {
        margin: "2% 9%",
        fontSize: "1rem",
        color: "#000",
        fontFamily: "Poppins",
        fontWeight: "bolder",
    },
})(Typography);

const FTextField = withStyles({
    root: {
        backgroundColor: "#C4C4C4",
        fontSize: "0.8rem",
    },
})(TextField);

function Content() {
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);
    const [isOpenFail, setIsOpenFail] = useState(false);
    const [isOpenFailRequired, setIsOpenFailRequired] = useState(false);

    // backend
    const [statment, setStatment] = useState("");
    const [department, setDepartment] = useState("");
    const [options, setOptions] = useState(["", "", "", ""]);
    const [answer, setAnswer] = useState("");

    const [quesType, setquesType] = useState(true);
    const [ques, setQues] = useState("Create New Question!");
    const handleChange = (event) => {
        setDepartment(event.target.value);
    };

    const handleSubmit = async () => {
        let newAnswer;
        if (answer === "option 1") {
            newAnswer = options[0];
        } else if (answer === "option 2") {
            newAnswer = options[1];
        } else if (answer === "option 3") {
            newAnswer = options[2];
        } else {
            newAnswer = options[3];
        }
        const data = {
            statement: statment,
            department,
            options,
            answer: newAnswer,
        };

        try {
            const response = await addQuestion(data).unwrap();
            console.log(response);
            setIsOpenSuccess(true);
        } catch (error) {
            console.log(error);
            if (
                data.statement != "" ||
                data.department != "" ||
                data.options != "" ||
                data.answer != ""
            ) {
                setIsOpenFailRequired(true);
            } else {
                setIsOpenFail(true);
            }
        }
    };

    const [addQuestion, { isLoading }] = useAddQuestionMutation();

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("Success Timeout");
    //         setIsOpenSuccess(false);
    //     }, 3000);
    // }, [isOpenSuccess]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("Fail Timeout");
    //         setIsOpenFail(false);
    //     }, 3000);
    // }, [isOpenFail]);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                height: "100%",
                width: "100%",
                backgroundColor: "#050022",
                color: "white",
            }}
        >
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                open={isOpenSuccess}
                onClose={() => {
                    console.log("Close");
                    setIsOpenSuccess(false);
                }}
                message="Question Added Successfully"
            >
                <Alert severity="success">Successfully added question</Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                open={isOpenFail}
                onClose={() => {
                    console.log("Close");
                    setIsOpenFail(false);
                }}
                message="Question could not be added"
            >
                <Alert severity="error">Question could not be added</Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                open={isOpenFailRequired}
                onClose={() => {
                    console.log("Close");
                    setIsOpenFailRequired(false);
                }}
                message="Please enter all the required fields"
            >
                <Alert severity="warning">
                    Please enter all the required fields
                </Alert>
            </Snackbar>
            <Typography
                sx={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                    marginTop: "80px",
                }}
            >
                {ques}
            </Typography>
            <Typography
                sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
            >
                Fill in the basic information and proceed to create
            </Typography>
            <Box
                component="form"
                autoComplete="off"
                sx={{
                    margin: "20px",
                    marginLeft: "19%",
                    backgroundColor: "#f2f2f4",
                    borderRadius: "30px",
                    width: "60%",
                    "& .MuiTextField-root": {
                        ml: 9,
                        width: "80%",
                        fontFamily: "Poppins",
                    },
                }}
            >
                <br></br>
                <FTypography> Question Title</FTypography>
                <FTextField
                    id="qtitle"
                    multiline
                    rows={9}
                    variant="filled"
                    InputProps={{
                        style: {
                            color: "#343434",
                            fontWeight: "bolder",
                        },
                    }}
                    value={statment}
                    onChange={(e) => {
                        setStatment(e.target.value);
                    }}
                    required
                />
                <FTypography> Select Department </FTypography>
                <FTextField
                    id="qdept"
                    select
                    value={department}
                    onChange={handleChange}
                    required
                >
                    {departments.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </FTextField>
                {/* <FTypography> Select Question Bank(s)</FTypography>
                <FTextField
                    id="qbank"
                    select
                    multiple={true}
                    value={questionBank}
                    onChange={handleBank}
                >
                    {quesBank.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </FTextField> */}
                <RadioGroup sx={{ margin: "2% 10%" }} defaultValue="MCQ">
                    <FormControlLabel
                        sx={{ color: "#000" }}
                        onClick={() => setquesType(true)}
                        value="MCQ"
                        control={
                            <Radio
                                sx={{ "&.Mui-checked": { color: "#edea0f" } }}
                            />
                        }
                        label="Multiple Choice Question (MCQ)"
                    />
                    {/* <FormControlLabel
                        sx={{ color: "#000" }}
                        onClick={() => setquesType(false)}
                        value="fill"
                        control={
                            <Radio
                                sx={{ "&.Mui-checked": { color: "#edea0f" } }}
                            />
                        }
                        label="Fill in the Blanks"
                    /> */}
                </RadioGroup>
                <br></br>
                {quesType ? (
                    <Box
                        sx={{
                            display: "grid",
                            paddingLeft: "7%",
                            gridTemplateColumns: "auto auto auto auto",
                            "& .MuiTextField-root": {
                                width: "70%",
                                margin: "1%",
                                fontFamily: "Poppins",
                            },
                        }}
                    >
                        <FTypography> Option 1</FTypography>
                        <FTextField
                            id="qopt1"
                            variant="filled"
                            InputProps={{
                                style: {
                                    color: "#343434",
                                    fontWeight: "bolder",
                                },
                            }}
                            value={options[0]}
                            onChange={(e) => {
                                setOptions(
                                    produce(options, (draftState) => {
                                        draftState.splice(0, 1, e.target.value);
                                    })
                                );
                            }}
                            size="small"
                            required
                        />
                        <FTypography> Option 2</FTypography>
                        <FTextField
                            id="qopt1"
                            variant="filled"
                            InputProps={{
                                style: {
                                    color: "#343434",
                                    fontWeight: "bolder",
                                },
                            }}
                            value={options[1]}
                            onChange={(e) => {
                                setOptions(
                                    produce(options, (draftState) => {
                                        draftState.splice(1, 1, e.target.value);
                                    })
                                );
                            }}
                            size="small"
                            required
                        />
                        <FTypography> Option 3</FTypography>
                        <FTextField
                            id="qopt1"
                            variant="filled"
                            InputProps={{
                                style: {
                                    color: "#343434",
                                    fontWeight: "bolder",
                                },
                            }}
                            value={options[2]}
                            onChange={(e) => {
                                setOptions(
                                    produce(options, (draftState) => {
                                        draftState.splice(2, 1, e.target.value);
                                    })
                                );
                            }}
                            size="small"
                            required
                        />
                        <FTypography> Option 4</FTypography>
                        <FTextField
                            id="qopt1"
                            variant="filled"
                            InputProps={{
                                style: {
                                    color: "#343434",
                                    fontWeight: "bolder",
                                },
                            }}
                            value={options[3]}
                            onChange={(e) => {
                                setOptions(
                                    produce(options, (draftState) => {
                                        draftState.splice(3, 1, e.target.value);
                                    })
                                );
                            }}
                            size="small"
                            required
                        />
                    </Box>
                ) : null}
                <FTypography> Select Answer </FTypography>
                <FTextField
                    id="qdept"
                    select
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                        console.log(answer);
                    }}
                    required
                >
                    {answers.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </FTextField>
                <Button sx={{ width: "100%" }} onClick={() => handleSubmit()}>
                    <Badge
                        content="Create"
                        logout
                        style={{
                            color: "#000",
                            textAlign: "center",
                            cursor: "pointer",
                        }}
                    />
                </Button>
            </Box>
        </Box>
    );
}

export default Content;
