import { Box, Typography, TextField, Button, MenuItem, responsiveFontSizes } from "@mui/material";
import { withStyles } from "@mui/styles";
import Badge from "../Badge";
import { React, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAddQuizMutation } from "../../../app/services/api";
import { useNavigate } from "react-router-dom";

const departments = [
    {
        value: "electrical",
        label: "Electrical",
    },
    {
        value: "robotics",
        label: "General Robotics",
    },
    {
        value: "programming",
        label: "Programming",
    },
    {
        value: "mechanical",
        label: "Mechanical",
    },
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
    const [department, setDepartment] = useState("electrical");
    const handleChange = (event) => {
        setDepartment(event.target.value);
    };

    const navigate=useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [noOfQuestions, setNoOfQuestions] = useState(0);
    //const [questions,setName]=useState('')
    const [addQuiz,{isSuccess,isLoading,isError}]=useAddQuizMutation()
    const handleSubmit =async (event) => {
        event.preventDefault();
        console.log({ name, description, start, end, noOfQuestions });
       try{
            const response=await addQuiz({ name, description, start, end, noOfQuestions,department }).unwrap()
            console.log(response)
            navigate('/admin')


       }
       catch(err){
            console.log(err)
       }
    };

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
                Create New Quiz!
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
                        width: "65ch",
                        fontFamily: "Poppins",
                    },
                }}
            >
                <br></br>
                <FTypography> Quiz Title</FTypography>
                <FTextField
                    id="qtitle"
                    variant="filled"
                    size="small"
                    InputProps={{
                        style: {
                            color: "#343434",
                            fontWeight: "bolder",
                        },
                    }}
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
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
                <FTypography>Number of Questions </FTypography>
                <FTextField
                    type="number"
                    InputProps={{
                        style: {
                            color: "#343434",
                            fontWeight: "bolder",
                        },
                    }}
                    id="qnum"
                    variant="filled"
                    size="small"
                    value={noOfQuestions}
                    onChange={(event) => setNoOfQuestions(event.target.value)}
                />
                <FTypography>Time Limit (in mins)</FTypography>
                <FTextField
                    InputProps={{
                        style: {
                            color: "#343434",
                            fontWeight: "bolder",
                        },
                    }}
                    id="qtime"
                    variant="filled"
                    size="small"
                    type="number"
                />
                <FTypography>Start Time</FTypography>
                <FTextField
                    InputProps={{
                        style: {
                            color: "#343434",
                            fontWeight: "bolder",
                        },
                    }}
                    id="qstart"
                    variant="filled"
                    size="small"
                    type="datetime-local"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={start}
                    onChange={(event) => setStart(event.target.value)}
                />
                <FTypography>End Time</FTypography>
                <FTextField
                    InputProps={{
                        style: {
                            color: "#343434",
                            fontWeight: "bolder",
                        },
                    }}
                    id="qend"
                    variant="filled"
                    size="small"
                    type="datetime-local"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={end}
                    onChange={(event) => setEnd(event.target.value)}
                />
                <FTypography>Quiz Description</FTypography>
                <FTextField
                    InputProps={{
                        style: {
                            color: "#343434",
                            fontWeight: "bolder",
                        },
                    }}
                    id="qplace"
                    variant="filled"
                    size="small"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <br></br>
                {/* <Link to="/addquiz/:quizid" style={{ textDecoration: 'none' }}> */}
                <Button sx={{ width: "100%" }} onClick={handleSubmit}>
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
                {/* </Link> */}
            </Box>
        </Box>
    );
}

export default Content;
