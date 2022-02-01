import { Box, Typography,TextField, Button, MenuItem} from "@mui/material";
import { withStyles } from "@mui/styles";
import Badge from "../Badge";
import {React, useState} from "react";
import {Link} from "react-router-dom";

const departments = [
    {
        value: 'Electrical',
        label: 'Electrical',
    },
    {
        value: 'General Robotics',
        label: 'General Robotics',
    },
    {
        value: 'Programming',
        label: 'Programming',
    },
    {
        value: 'Mechanical',
        label: 'Mechanical',
    },
];


const FTypography = withStyles({
    root: {
        margin: "2% 9%",
        fontSize: "1rem",
        color: "#000",
        fontFamily: "Poppins",
        fontWeight: "bolder"
      },
  })(Typography);

const FTextField = withStyles({
    root: {
        backgroundColor: "#C4C4C4", 
        fontSize: "0.8rem",

    },
    })(TextField);

function Content() {
  const [department, setDepartment] = useState('Electrical');
  const handleChange = (event) => {
    setDepartment(event.target.value);
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
          '& .MuiTextField-root': {ml: 9, width: '65ch', fontFamily: 'Poppins'},
        }}
      >
        <br></br>
        <FTypography > Quiz Title</FTypography>
        <FTextField
          id="qtitle" 
          variant="filled"
          size="small"
          InputProps={{
            style: {
                color: "#343434",
                fontWeight: "bolder"
            }
        }}
        required
        />
        <FTypography > Select Department </FTypography>
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
        <FTypography> Questions </FTypography>
        <FTextField
          type="number"
          InputProps={{
            style: {
                color: "#343434",
                fontWeight: "bolder"
            }
        }}
          id="qnum" 
          variant="filled"
          size="small"
        />       
        <FTypography>Time Limit (in mins)</FTypography>
        <FTextField
        InputProps={{
          style: {
              color: "#343434",
              fontWeight: "bolder"
          }
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
              fontWeight: "bolder"
          }
      }}
        id="qstart" 
        variant="filled"
        size="small"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
      />
        <FTypography>End Time</FTypography>
        <FTextField
        InputProps={{
          style: {
              color: "#343434",
              fontWeight: "bolder"
          }
      }}
        id="qend" 
        variant="filled"
        size="small"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
      />
        <FTypography>Placeholder</FTypography>
        <FTextField
        InputProps={{
          style: {
              color: "#343434",
              fontWeight: "bolder"
          }
      }}
        id="qplace" 
        variant="filled"
        size="small"
      />
      <br></br>
      <Link to="/addquiz/:quizid" style={{ textDecoration: 'none' }}>
        <Button sx={{width: "100%"}}>
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
        </Link>
      </Box>
    </Box>
  );
}

export default Content;
