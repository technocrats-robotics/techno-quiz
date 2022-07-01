import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
// components
import backgroundImg from "../img/bg.svg";
import Navbar from "../components/Navbar";
import { Typography } from "@mui/material";

function Homepage() {
    return (
        <>
            <Navbar />
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
                    backgroungRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "50% 0",
                    mixBlendMode: "hard-light",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "85%",
                        height: {
                            xs: "160px",
                            sm: "200px",
                            md: "300px",
                        },
                        mx: "auto",
                        marginY: {
                            xs: "5rem",
                        },
                        backgroundColor: "#CEFDCD",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "1.5rem",
                    }}
                >
                    <Typography variant="h3" component="h1">
                        Hero Content
                    </Typography>
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
                    <Typography variant="h3" component="h1">
                        Timer
                    </Typography>
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
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            color: "white",
                            marginBottom: "5rem",
                        }}
                    >
                        Departments
                    </Typography>
                    <Grid
                        container
                        columnSpacing={{ xs: 1, sm: 6, md: 10, lg: 6 }}
                        rowSpacing={6}
                    >
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Paper
                                elevation={12}
                                style={{
                                    background:
                                        "linear-gradient(145.74deg, rgba(41, 42, 46, 0.6) -11.13%, rgba(218, 218, 218, 0.37) 25.01%, rgba(218, 218, 218, 0.28) 69.34%, rgba(41, 42, 46, 0.62) 119.8%)",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "3rem",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                    // borderImageSource:
                                    //     "linear-gradient(144.87deg, rgba(255,255,255, 0.64), rgba(218, 218, 218, 0.7), rgba(255, 255, 255, 0.9))",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 200, 200, 200, 0.37 )",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    Mechanical
                                </Typography>
                                <Link to="/department/4">
                                    <Button
                                        variant="outlined"
                                        style={{
                                            color: "#fffd1b",
                                            border: "2px solid #fffd1b",
                                        }}
                                    >
                                        Click Me
                                    </Button>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Paper
                                elevation={12}
                                style={{
                                    background:
                                        "linear-gradient(145.74deg, rgba(41, 42, 46, 0.6) -11.13%, rgba(218, 218, 218, 0.37) 25.01%, rgba(218, 218, 218, 0.28) 69.34%, rgba(41, 42, 46, 0.62) 119.8%)",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "3rem",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                    // borderImageSource:
                                    //     "linear-gradient(144.87deg, rgba(255,255,255, 0.64), rgba(218, 218, 218, 0.7), rgba(255, 255, 255, 0.9))",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 200, 200, 200, 0.37 )",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    Electrical
                                </Typography>
                                <Link to="/department/3">
                                    <Button
                                        variant="outlined"
                                        style={{
                                            color: "#fffd1b",
                                            border: "2px solid #fffd1b",
                                        }}
                                    >
                                        Click Me
                                    </Button>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Paper
                                elevation={12}
                                style={{
                                    background:
                                        "linear-gradient(145.74deg, rgba(41, 42, 46, 0.6) -11.13%, rgba(218, 218, 218, 0.37) 25.01%, rgba(218, 218, 218, 0.28) 69.34%, rgba(41, 42, 46, 0.62) 119.8%)",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "3rem",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                    // borderImageSource:
                                    //     "linear-gradient(144.87deg, rgba(255,255,255, 0.64), rgba(218, 218, 218, 0.7), rgba(255, 255, 255, 0.9))",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 200, 200, 200, 0.37 )",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    Programming
                                </Typography>
                                <Link to="/department/2">
                                    <Button
                                        variant="outlined"
                                        style={{
                                            color: "#fffd1b",
                                            border: "2px solid #fffd1b",
                                        }}
                                    >
                                        Click Me
                                    </Button>
                                </Link>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <Paper
                                elevation={12}
                                style={{
                                    background:
                                        "linear-gradient(145.74deg, rgba(41, 42, 46, 0.6) -11.13%, rgba(218, 218, 218, 0.37) 25.01%, rgba(218, 218, 218, 0.28) 69.34%, rgba(41, 42, 46, 0.62) 119.8%)",
                                    height: "40vh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "3rem",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                    // borderImageSource:
                                    //     "linear-gradient(144.87deg, rgba(255,255,255, 0.64), rgba(218, 218, 218, 0.7), rgba(255, 255, 255, 0.9))",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 200, 200, 200, 0.37 )",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    General
                                </Typography>
                                <Link to="/department/1">
                                    <Button
                                        variant="outlined"
                                        style={{
                                            color: "#fffd1b",
                                            border: "2px solid #fffd1b",
                                        }}
                                    >
                                        Click Me
                                    </Button>
                                </Link>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}

export default Homepage;
