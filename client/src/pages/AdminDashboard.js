import React, { useState } from "react";
import Content from "../components/Admin/Content";
import AddQuestion from "../components/Admin/AddQuestion";
import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";

import Header from "../components/Admin/Header";
import SideBar from "../components/Admin/Sidebar";

import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import Man from "../components/Icons/Man.png";
import Badge from "../components/Admin/Badge";

const CTypography = withStyles({
  root: {
    color: "#000",
    textAlign: "center",
    margin: "5px",
    fontSize: "1.2rem",
    fontFamily: "Roboto",
    "&:hover": {
      background: "#080136",
      color: "#FFF",
      borderRadius: "10px 0 0 10px",
      marginRight: "0px",
      marginLeft: "30px",
      padding: "5px",
      cursor: "pointer",
    },
  },
})(Typography);

function AdminDashboard() {
  const [hamburger, setHamburger] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [contentBox, setContentBox] = useState(0);

  return (

    <Box>
      <Header setHamburger={setHamburger} hamburger={hamburger} />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          height: "100%",
          paddingTop: {
            xs: "4rem",
            sm: "6rem",
          },
        }}
      >

        {/* sidebar starts */}
        <Box
          sx={{
            position: "static",
            width: "20vw",
            backgroundColor: "#080136",
            color: "white",
            borderRight: "1px solid #eee",
            overflow: "hidden",
            marginTop: "-96px",
          }}
          display={{
            xs: "none",
            md: "block",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "#FFF",
              marginTop: "140px",
              borderRadius: "30px",
              marginLeft: "25px",
              marginRight: "20px",
            }}
          >
            <CTypography style={{ marginTop: "40px" }} onClick={() => {
                setContentBox(0)
              }}> Dashboard 
            </CTypography>
            
            <CTypography
              onClick={() => {
                setContentBox(1)
              }}
            >
              {" "}
              Add Questions{" "}
            </CTypography>
            <CTypography> User Details </CTypography>
            <CTypography> View Statistics </CTypography>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                marginLeft: "1.5rem",
                margin: "20px",
              }}
            >
              <img
                src={Man}
                style={{
                  width: "100px",
                  height: "140px",
                }}
                alt="Dashboard"
              />
            </IconButton>
            <Button>
              <Badge
                content="Logout"
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
        {/* sidebar ends */}
        
        {/* main content */}
        {
          contentBox == 0?(
            <Content />
          ) : contentBox == 1?(
            <AddQuestion/>
          ) :(null)
        }

      </Box>
    </Box>
  );
}

export default AdminDashboard;
