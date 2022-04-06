import { Box, Typography } from "@mui/material";
import React from "react";
import Meter from "../Icons/Meter.png";
import Graph from "../Icons/Graph.png";
import Test from "../Icons/Test.png";

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
        Welcome, Dummy User!
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
      >
        We're happy to have you back !
      </Typography>
      <Box
        sx={{
          margin: "70px",
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "370px",
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
          Progress Meter
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "0.9rem",
            color: "#000",
          }}
        >
          Keep it up! You're getting there
        </Typography>
        <img
          src={Meter}
          style={{
            width: "150px",
            height: "80px",
            marginLeft: "105px",
            marginBottom: "15px",
          }}
          alt="Dashboard"
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          marginLeft: "520px",
          marginTop: "-270px",
          width: "640px",
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
          User Analysis
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
      <Box
        sx={{
          margin: "70px",
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "550px",
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
          Summary of Previous Attempts
        </Typography>
        <br></br>
        <img
          src={Graph}
          style={{
            width: "500px",
            height: "130px",
            marginLeft: "35px",
            marginBottom: "15px",
          }}
          alt="Dashboard"
        />
      </Box>
      <Box
        sx={{
          marginLeft: "690px",
          marginTop: "-295px",
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "450px",
        }}
      >
        <br></br>
        <img
          src={Test}
          style={{
            width: "200px",
            height: "175px",
            marginLeft: "115px",
            marginBottom: "15px",
          }}
          alt="Dashboard"
        />
      </Box>
    </Box>
  );
}

export default Content;
