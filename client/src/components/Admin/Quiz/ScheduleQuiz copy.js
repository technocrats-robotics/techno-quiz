import { Box, Typography,TextField, Button, List, ListItem, MenuItem} from "@mui/material";
import { withStyles } from "@mui/styles";
import Badge from "../Badge";
import {React, useState} from "react";
import {Link} from "react-router-dom";



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

function ScheduleQuiz() {
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
        Add Questions to Scheduled Quiz
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
      >
        Select the Questions to finally publish the Quiz
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
        <FTypography> Questions </FTypography>
        <div style={{marginLeft: '80px', display: 'grid', gridTemplateColumns: 'auto auto'}}>
        <Typography sx={{color: '#000', marginRight: '70px'}}>Included Questions</Typography>
        <Typography sx={{ color: '#000'}}>Available Questions</Typography>
        </div>
        <div className= "AddSchedule" style={{width: '80%', display: 'grid', gridTemplateColumns: 'auto auto auto'}}>  
      <List sx={{width: '90%', background: '#000', marginLeft: '30%', height: '400px'}}>
      {/* <FTextField style={{width: '90%', marginLeft: '30%', height: '400px'}}>
      
      </FTextField> */}

      </List>
    <div className="QuizAdd" style={{display: 'grid', gridTemplateColumns: 'auto'}}>
          <Button style={{marginLeft: '70px', width: '130px', marginRight: '-190px'}}> 
    <Badge
            content =">"
            schquiz
            style={{
              color: "#000",
              textAlign: "center",
              cursor: "pointer"
            }}
          />
    </Button>
    <Button style={{marginLeft: '70px', width: '130px', marginRight: '-190px'}}> 
    <Badge
            content ="<"
            schquiz
            style={{
              color: "#000",
              display: 'flex',
              textAlign: "center",
              cursor: "pointer"
            }}
          />
    </Button>
    </div>
      <FTextField style={{width: '90%', marginLeft: '40%', size: '400px'}}>

      </FTextField>
      </div>
      <Link to="/addquiz/:quizid" style={{ textDecoration: 'none' }}>
        <Button sx={{width: "100%"}}>
          <Badge
            content ="Create"
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

export default ScheduleQuiz;
