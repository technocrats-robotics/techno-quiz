import { Box, Typography,TextField, Button, MenuItem} from "@mui/material";
import { withStyles } from "@mui/styles";
import Badge from "../Badge";
import {React, useState} from "react";
import {Link} from "react-router-dom";

const questionBanks = [
    {value: 'Electrical 1', label: 'Electrical 1', },
    {value: 'Electrical 2', label: 'Electrical 2', },
    {value: 'Electrical 3', label: 'Electrical 3', },
    {value: 'Electrical 4', label: 'Electrical 4', },
    {value: 'Electrical 5', label: 'Electrical 5', },
    {value: 'Programming 1', label: 'Programming 1', },
    {value: 'Programming 2', label: 'Programming 2', },
    {value: 'Programming 3', label: 'Programming 3', },
    {value: 'Programming 4', label: 'Programming 4', },
    {value: 'Robotics 1', label: 'Robotics 1', },
    {value: 'Robotics 2', label: 'Robotics 2', },
    {value: 'Robotics 3', label: 'Robotics 3', },
    {value: 'Mechanical 1', label: 'Mechanical 1', },
    {value: 'Mechanical 2', label: 'Mechanical 2', },
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
  const [qbank, setqBank] = useState('Electrical 1');
  const handleChange = (event) => {
    setqBank(event.target.value);
  };
  const [sch, setSch] = useState("Finalise Quiz");

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
        {sch}
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
      >
        The details of the Quiz are as follows:
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
          value="Quiz Title 1"
          variant="filled"
          size="small"
          InputProps={{
            style: {
                color: "#343434",
                fontWeight: "bolder"
            }
        }}
        disabled
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
        value="2022-02-01T10:00"
        variant="filled"
        size="small"
        type="datetime-local"
        disabled
      />
        <FTypography>End Time</FTypography>
        <FTextField
        InputProps={{
          style: {
              color: "#343434",
              fontWeight: "bolder"
          }
      }}
      value="2022-02-01T11:00"
        id="qend" 
        variant="filled"
        size="small"
        type="datetime-local"
        disabled
      />
    <FTypography > Select Question Bank </FTypography>
        <FTextField
          id="questionBank"
          select
          value={qbank}
          onChange={handleChange}
        >
          {questionBanks.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </FTextField>
        <Box
        sx={{
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          marginTop: "15px",
          marginLeft: "10%",
          width: "350px",
          border: "1px solid #C4C4C4",
          boxShadow: "3px 5px #C4C4C4"
        }}
      >
        <br></br>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "bolder",
            color: "#000",
          }}
        >
         {qbank}
        </Typography>
        <Typography
          sx={{
            margin: "20px 15px",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#000",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          fermentum vitae, sit tincidunt aenean eu. Sed neque auctor purus
          pretium pharetra donec vel felis. Nisl placerat vel, nulla tempor id
          a. Elementum urna quis donec faucibus et, vitae nec. In risus lectus
          ultricies sit. Morbi urna orci.
        </Typography>
        <br></br>
      </Box>
      <Link to="/addquiz/:quizid" style={{ textDecoration: 'none' }}>
        <Button sx={{width: "100%"}} onClick={() => setSch("Quiz Scheduled Successfully!")}>
          <Badge
            content="Schedule"
            quiz
            style={{
              marginRight: "-40%",
              color: "#000",
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
