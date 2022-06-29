import React from "react";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

import backgroundImg from "../img/bg.svg";

export default function About() {
    return (
        <>
            <div
                style={{
                    backgroundImage:
                        "linear-gradient(145deg,rgba(0,0,0,1),rgba(0,0,100,0.9))",
                    position: "fixed",
                    top: "0",
                    right: "0",
                    left: "0",
                    bottom: "0",
                }}
            />
            <div
                style={{
                    backgroundImage: "url(" + backgroundImg + ")",
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "50% 0",
                    position: "absolute",
                    mixBlendMode: "hard-light",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "85%",
                        mx: "auto",
                        mt: "5rem",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Grid
                        container
                        columnSpacing={{ xs: 1, sm: 6, md: 10, lg: 6 }}
                        rowSpacing={6}
                    >
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Paper
                                elevation={12}
                                style={{
                                    background: "linear-gradient(145.74deg, rgba(41, 42, 46, 0.6) -11.13%, rgba(218, 218, 218, 0.37) 25.01%, rgba(218, 218, 218, 0.28) 69.34%, rgba(41, 42, 46, 0.62) 119.8%)",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "3rem",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 200, 200, 200, 0.37 )",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h1"
                                    sx={{
                                        color: "white",
                                        marginBottom: "5rem",
                                    }}
                                >
                                    Mechanical
                                </Typography>
                                
                                <Button
                                    variant="outlined"
                                    component={Link} to="/department/4"
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
                                    background: "linear-gradient(145.74deg, rgba(41, 42, 46, 0.6) -11.13%, rgba(218, 218, 218, 0.37) 25.01%, rgba(218, 218, 218, 0.28) 69.34%, rgba(41, 42, 46, 0.62) 119.8%)",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "3rem",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 200, 200, 200, 0.37 )",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h1"
                                    sx={{
                                        color: "white",
                                        marginBottom: "5rem",
                                    }}
                                >
                                    Electrical
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component={Link} to="/department/3"
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
                                    background: "linear-gradient(145.74deg, rgba(41, 42, 46, 0.6) -11.13%, rgba(218, 218, 218, 0.37) 25.01%, rgba(218, 218, 218, 0.28) 69.34%, rgba(41, 42, 46, 0.62) 119.8%)",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "3rem",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 200, 200, 200, 0.37 )",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h1"
                                   
                                    sx={{
                                        color: "white",
                                        marginBottom: "5rem",
                                    }}
                                >
                                    Programming
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component={Link} to="/department/2"
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
                                    background: "linear-gradient(145.74deg, rgba(41, 42, 46, 0.6) -11.13%, rgba(218, 218, 218, 0.37) 25.01%, rgba(218, 218, 218, 0.28) 69.34%, rgba(41, 42, 46, 0.62) 119.8%)",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "3rem",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 200, 200, 200, 0.37 )",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h1"
                                    sx={{
                                        color: "white",
                                        marginBottom: "5rem",
                                    }}
                                >
                                    General
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component={Link} to="/department/1"
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

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "85%",
                        mx: "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "7rem",
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            color: "white",
                            marginBottom: "4rem",
                        }}
                    >
                        About Technocrats
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "justify",
                            color: "white",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris ut elementum erat. Morbi nec malesuada elit.
                        Suspendisse placerat velit magna, vitae commodo mi
                        accumsan elementum. Curabitur cursus nunc sit amet
                        faucibus consequat. Fusce dictum interdum leo. Sed eget
                        luctus leo. Nunc tellus lorem, placerat id urna at,
                        viverra iaculis magna. Nunc a fermentum mauris. Etiam
                        malesuada leo ut quam elementum sodales. Duis a
                        ullamcorper purus. Aenean tristique felis in bibendum
                        imperdiet. Praesent euismod ante ac tortor sodales,
                        convallis fermentum turpis sagittis. Nulla iaculis vel
                        diam a luctus. Aenean porta purus orci, in mattis turpis
                        dignissim ut.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "85%",
                        mx: "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "5rem",
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            color: "white",
                            marginBottom: "4rem",
                        }}
                    >
                        Achievements
                    </Typography>
                    <Grid
                        container
                        columnSpacing={{ xs: 1, sm: 4, md: 6, lg: 6 }}
                        rowSpacing={6}
                        style={{ marginTop: "1.5rem" }}
                    >
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <img
                                src={require("../img/pic_1.svg").default}
                                style={{
                                    width: "90%",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <img
                                src={require("../img/pic_2.svg").default}
                                style={{
                                    width: "90%",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <img
                                src={require("../img/pic_3.svg").default}
                                style={{
                                    width: "90%",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <img
                                src={require("../img/pic_4.svg").default}
                                style={{
                                    width: "90%",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}
