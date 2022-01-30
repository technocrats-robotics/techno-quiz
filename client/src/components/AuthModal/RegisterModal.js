import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LoginLogo from "../Icons/login.svg";

function RegisterModal({ setHasAccount, hasAccount }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
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
        {matches && (
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
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // marginLeft:'2rem',
            // marginRight:'20%',
            paddingLeft: "3rem",
            paddingRight: "3rem",
            justifyContent: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            width: {
              lg: "inherit",
              xs: "100%",
            },
          }}
        >
          {!matches && (
            <Typography
              variant="h5"
              component="h3"
              sx={{
                marginBottom: "1.5rem",
              }}
            >
              Login
            </Typography>
          )}
          <input
            id="input"
            label="Name"
            placeholder="Name"
            style={{
              color: "white",
              background: "#405893",
              "&::placeholder": {
                color: "white",
              },
              borderRadius: "1.5rem",
              border: "1px solid rgba(255,255,255,0.7)",
              marginBottom: "1rem",
              width: "100%",
              outline: "none",
              height: "3rem",
              paddingLeft: "1.5rem",
            }}
          />

          <input
            id="input"
            label="Email-Id"
            placeholder="Email-Id"
            style={{
              color: "white",
              background: "#405893",
              "&::placeholder": {
                color: "white",
              },
              borderRadius: "1.5rem",
              border: "1px solid rgba(255,255,255,0.7)",
              marginBottom: "1rem",
              width: "100%",
              outline: "none",
              height: "3rem",
              paddingLeft: "1.5rem",
            }}
          />

          <input
            id="input"
            label="Password"
            placeholder="Password"
            style={{
              color: "white",
              background: "#405893",
              "::placeholder": {
                color: "white",
              },
              borderRadius: "1.5rem",
              border: "none",
              marginBottom: "1rem",
              width: "100%",
              outline: "none",
              height: "3rem",
              paddingLeft: "1.5rem",
            }}
          />

          <input
            id="input"
            label="Re-enter Password"
            placeholder="Re-enter Password"
            style={{
              color: "white",
              background: "#405893",
              "::placeholder": {
                color: "white",
              },
              borderRadius: "1.5rem",
              border: "none",
              marginBottom: "1rem",
              width: "100%",
              outline: "none",
              height: "3rem",
              paddingLeft: "1.5rem",
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
