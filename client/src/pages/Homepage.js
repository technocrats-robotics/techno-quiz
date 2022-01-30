import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// components
import backgroundImg from "../img/bg.svg";

function Homepage() {
    return (
        <>
            <div
                style={{
                    background:
                        "linear-gradient(145deg,rgba(0,0,0,1),rgba(0,0,100,0.9))",
                    position: "fixed",
                    top: "0",
                    right: "0",
                    left: "0",
                    bottom: "0",
                    // zIndex: -1,
                }}
            />
            <div
                style={{
                    backgroundImage: "url(" + backgroundImg + ")",
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "50% 0",
                    // position: "absolute",
                    mixBlendMode: "hard-light",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "85%",
                        height: "40vh",
                        mx: "auto",
                        backgroundColor: "#CEFDCD",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "1.5rem",
                    }}
                >
                    <h1>Hero Section</h1>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        width: "65%",
                        height: "20vh",
                        mx: "auto",
                        mt: "3%",
                        backgroundColor: "#c4c4c4",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "1.5rem",
                    }}
                >
                    <h1>Timer</h1>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        width: "85%",
                        mx: "auto",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "7rem",
                    }}
                >
                    <h1
                        style={{
                            color: "white",
                            fontSize: "9vmin",
                            marginBottom: "3rem",
                        }}
                    >
                        DEPARTMENTS
                    </h1>
                    <Grid
                        container
                        columnSpacing={{ xs: 1, sm: 6, md: 10, lg: 6 }}
                        rowSpacing={6}
                    >
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Paper
                                elevation={12}
                                style={{
                                    backgroundColor: "#c4c4c4",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "1rem",
                                    background: "rgba(41, 42, 46, 0.6)",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                                    backdropFilter: "blur( 6px )",
                                }}
                            >
                                <h1
                                    style={{
                                        color: "white",
                                        fontSize: "5vmin",
                                    }}
                                >
                                    Mechanical
                                </h1>
                                <Button
                                    variant="outlined"
                                    style={{
                                        color: "#fffd1b",
                                        border: "2px solid #fffd1b",
                                    }}
                                >
                                    Click Me
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Paper
                                elevation={12}
                                style={{
                                    backgroundColor: "#c4c4c4",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "1rem",
                                    background: "rgba(41, 42, 46, 0.6)",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                                    backdropFilter: "blur( 6px )",
                                }}
                            >
                                <h1
                                    style={{
                                        color: "white",
                                        fontSize: "5vmin",
                                    }}
                                >
                                    Electrical
                                </h1>
                                <Button
                                    variant="outlined"
                                    style={{
                                        color: "#fffd1b",
                                        border: "2px solid #fffd1b",
                                    }}
                                >
                                    Click Me
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Paper
                                elevation={12}
                                style={{
                                    backgroundColor: "#c4c4c4",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "1rem",
                                    background: "rgba(41, 42, 46, 0.6)",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                                    backdropFilter: "blur( 6px )",
                                }}
                            >
                                <h1
                                    style={{
                                        color: "white",
                                        fontSize: "5vmin",
                                    }}
                                >
                                    Programming
                                </h1>
                                <Button
                                    variant="outlined"
                                    style={{
                                        color: "#fffd1b",
                                        border: "2px solid #fffd1b",
                                    }}
                                >
                                    Click Me
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Paper
                                elevation={12}
                                style={{
                                    backgroundColor: "#c4c4c4",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "1rem",
                                    background: "rgba(41, 42, 46, 0.6)",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                                    backdropFilter: "blur( 6px )",
                                }}
                            >
                                <h1
                                    style={{
                                        color: "white",
                                        fontSize: "5vmin",
                                    }}
                                >
                                    General
                                </h1>
                                <Button
                                    variant="outlined"
                                    style={{
                                        color: "#fffd1b",
                                        border: "2px solid #fffd1b",
                                    }}
                                >
                                    Click Me
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}

export default Homepage;
