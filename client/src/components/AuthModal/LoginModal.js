import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LoginLogo from "../Icons/login.svg";
import TextField from "@mui/material/TextField";

function LoginModal() {
  return (
    <Box
      sx={{
        margin: "5rem",
        display:'flex',
        background:'linear-gradient(145deg,rgba(6,0,43,1),rgba(4,0,28,1),rgba(23,0,163,1))',
        color:'white',
      }}
    >
      <Box sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
      }}>
        <Typography variant="h3" component={"h3"} >
          Login
        </Typography>
        <img src={LoginLogo} />
      </Box>

      <Box sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
      }}>
        <TextField
          id="outlined-basic"
          label="Email-Id"
          variant="outlined"
          placeholder="Username/Email-Id"
          sx={{
              color:'white',
              background:'#405893',
             '::placeholder':{
                 'color':'white'
             },
             borderRadius:'1.5rem',
             border:'none'
             
          }}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          placeholder="Password"
        />

        <TextField
          id="outlined-basic"
          label="Re-enter Password"
          variant="outlined"
          placeholder="Re-enter Password"
        />

        <Typography variant="p" component={"p"}>
          Don't have an account ?{" "}
          <Typography variant="span" component={"span"}>
            Register Now
          </Typography>
        </Typography>
        <Button variant="contained">Contained</Button>
      </Box>
    </Box>
  );
}

export default LoginModal;
