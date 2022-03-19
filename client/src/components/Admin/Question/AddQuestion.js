import {
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    RadioGroup,
    Radio,
    FormControlLabel,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import Badge from "../Badge";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useAddQuestionMutation } from "../../../app/services/api";

const departments = [
    { value: "Electrical", label: "Electrical" },
    { value: "General Robotics", label: "General Robotics" },
    { value: "Programming", label: "Programming" },
    { value: "Mechanical", label: "Mechanical" },
];

const quesBank = [
    { value: "Electrical 1", label: "Electrical 1" },
    { value: "Electrical 2", label: "Electrical 2" },
    { value: "Electrical 3", label: "Electrical 3" },
    { value: "Electrical 4", label: "Electrical 4" },
    { value: "Electrical 5", label: "Electrical 5" },
    { value: "Programming 1", label: "Programming 1" },
    { value: "Programming 2", label: "Programming 2" },
    { value: "Programming 3", label: "Programming 3" },
    { value: "Programming 4", label: "Programming 4" },
    { value: "Robotics 1", label: "Robotics 1" },
    { value: "Robotics 2", label: "Robotics 2" },
    { value: "Robotics 3", label: "Robotics 3" },
    { value: "Mechanical 1", label: "Mechanical 1" },
    { value: "Mechanical 2", label: "Mechanical 2" },
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
    const [department, setDepartment] = useState("Electrical");
    const [questionBank, setquesBank] = useState("Electrical 1");
    const [quesType, setquesType] = useState(true);
    const [ques, setQues] = useState("Create New Question!");
    const handleChange = (event) => {
        setDepartment(event.target.value);
    };
    const handleBank = (event) => {
        setquesBank(event.target.value);
    };

    const [addQuestion, { isLoading }] = useAddQuestionMutation();

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
                    required={true}
                />
                <FTypography> Select Department </FTypography>
                <FTextField
                    id="qdept"
                    select
                    value={department}
                    onChange={handleChange}
                >
                    {departments.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </FTextField>
                <FTypography> Select Question Bank(s)</FTypography>
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
                </FTextField>
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
                    <FormControlLabel
                        sx={{ color: "#000" }}
                        onClick={() => setquesType(false)}
                        value="fill"
                        control={
                            <Radio
                                sx={{ "&.Mui-checked": { color: "#edea0f" } }}
                            />
                        }
                        label="Fill in the Blanks"
                    />
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
                            size="small"
                            required
                        />
                    </Box>
                ) : null}
                <Button
                    sx={{ width: "100%" }}
                    onClick={() => setQues("Question Added Successfully!")}
                >
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
