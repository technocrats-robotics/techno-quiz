import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import TCRLogo from "../Icons/TCRoverLogo.png";
import TCR_TLogo from "../Icons/TLogo.png";

import { AdminPanelSettings } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const styles = {
  root: {
    color: "white",
    backgroundColor: "#080136",
    borderBottom: "1px solid #eee",
    overflow: "hidden",
    width: "83.3%",
  },
  logoSM: {
    maxHeight: "70px",
    objectFit: "cover",
  },
  logoXS: {
    maxHeight: "40px",
    objectFit: "cover",
  },
};
function Header({ hamburger, setHamburger }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar position="fixed" sx={styles.root}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: {
            xs: "space-around",
            sm: "space-between",
          },
          width: "calc(100%-1rem)",
        }}
      >
        <Button
          sx={{
            color: "white",
            display: {
              xs: "inline",
              sm: "none",
            },
          }}
          onClick={() => setHamburger(!hamburger)}
        >
          {!matches && (hamburger ? <CloseIcon /> : <MenuIcon />)}
        </Button>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            marginLeft: "1.5rem",
          }}
        >
          <img
            style={matches ? styles.logoSM : styles.logoXS}
            src={matches ? TCRLogo : TCR_TLogo}
            alt="TCR LOGO"
          />
        </IconButton>
        <Typography
          variant="h6"
          component="span"
          fontSize={{
            xs: "1rem",
            sm: "1.5rem",
          }}
        >
          DASHBOARD
        </Typography>
        <Button
          color="inherit"
          sx={{
            marginLeft: "2rem",
            paddingRight: "2rem",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <AdminPanelSettings
            sx={{
              width: "3rem",
              height: "3rem",
              paddingRight: "1rem",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          />
          <Typography
            component="span"
            display={{
              xs: "none",
              sm: "none",
              md: "inline-block",
            }}
          >
            Username
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
