import { Box, Typography, Button} from "@mui/material";
import { Link } from 'react-router-dom';
import Badge from "../Badge";
import React from "react";

function Content() {
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
        Manage Quizzes
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
      >
        Select the appropriate option
      </Typography>
      <Box sx={{ marginTop: "2%", marginLeft: "10%", display: "grid", gridTemplateColumns: "auto auto"}} >
      <Box
        sx={{
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "70%",
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
          Create New Quiz
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
        <Link to="/addquiz" style={{ textDecoration: 'none' }}>
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
      <Box
        sx={{
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "75%",
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
          Modify Existing Quiz
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
        <Link to="/modifyquiz" style={{ textDecoration: 'none' }}>
        <Button sx={{width: "100%"}}>
          <Badge
            content="Modify"
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
    </Box>
  );
}

export default Content;
