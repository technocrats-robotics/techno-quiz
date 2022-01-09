import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TCRLogo from "../Icons/TCRoverLogo.png";
import { AccountCircleRounded } from "@mui/icons-material";

import { Box } from "@mui/material";
const styles = {
    root: {
        color: "white",
        backgroundColor: "#080136",
        borderBottom: "1px solid #eee",
    },
    logo: {
        maxHeight: "70px",
        objectFit: "cover",
        marginLeft: "15px",
    },
};
function HeaderQuiz() {
    return (
        <Box>
            <AppBar position="static" sx={styles.root}>
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            marginLeft: "1.5rem",
                        }}
                    >
                        <img style={styles.logo} src={TCRLogo} alt="TCR LOGO" />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        Test Name
                    </Typography>
                    <Button
                        color="inherit"
                        sx={{ marginRight: "2rem", marginLeft: "2rem" }}
                    >
                        <AccountCircleRounded
                            sx={{
                                width: "3rem",
                                height: "3rem",
                                marginRight: "1rem",
                            }}
                        />
                        Username
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderQuiz;
