import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LoginLogo from "../Icons/login.svg";
import TextField from "@mui/material/TextField";

function RegisterModal({ setHasAccount, hasAccount }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 1000,
        }}
      />
      <Box
        sx={{
          // margin: "5rem",
          display: "flex",
          background:
            "linear-gradient(145deg,rgba(0,0,0,1),rgba(10,0,72,1),rgba(23,0,163,1))",
          color: "white",
          borderRadius: "3rem",
          position: "absolute",
          width: "60%",
          height: "100%",
          top: "20vh",
          left: "20vw",
          border: "10px solid white",
          justifyContent: "space-around",
          alignItems: "flex-start",
          paddingTop: "6rem",
          zIndex: 1000,
          overflow: "hidden",

          //  transform:"translate(0%,-40vh)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" component={"h3"}>
            Register
          </Typography>
          <img src={LoginLogo} style={{ maxWidth: "25rem" }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // marginLeft:'2rem',
            // marginRight:'20%',
            // paddingLeft:'2rem',
            justifyContent: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            placeholder="Name"
            sx={{
              color: "white",
              background: "#405893",
              "&::placeholder": {
                color: "white",
              },
              borderRadius: "1.5rem",
              border: "1px solid rgba(255,255,255,0.7)",
              marginBottom: "1rem",
              width: "100%",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email-Id"
            variant="outlined"
            placeholder="Email-Id"
            sx={{
              color: "white",
              background: "#405893",
              "&::placeholder": {
                color: "white",
              },
              borderRadius: "1.5rem",
              border: "1px solid rgba(255,255,255,0.7)",
              marginBottom: "1rem",
              width: "100%",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Password"
            sx={{
              color: "white",
              background: "#405893",
              "::placeholder": {
                color: "white",
              },
              borderRadius: "1.5rem",
              border: "none",
              marginBottom: "1rem",
              width: "100%",
            }}
          />

          <TextField
            id="outlined-basic"
            label="Re-enter Password"
            variant="outlined"
            placeholder="Re-enter Password"
            sx={{
              color: "white",
              background: "#405893",
              "::placeholder": {
                color: "white",
              },
              borderRadius: "1.5rem",
              border: "none",
              marginBottom: "1rem",
              width: "100%",
            }}
          />

          <Typography variant="p" component={"p"}>
            Do have an account ?
            <Typography
              variant="span"
              component={"span"}
              onClick={() => setHasAccount(!hasAccount)}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Login
            </Typography>
          </Typography>
          <Button
            variant="contained"
            style={{
              color: "white",
              background: "#FFE500",
              width: "100%",
              borderRadius: "1.5rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default RegisterModal;
