import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Badge from "../../Admin/Badge";
import React from "react";

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
                Attempt Quizzes
            </Typography>
            <Typography
                sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
            >
                Your chance to learn and rock!
            </Typography>
            <Box
                sx={{
                    marginTop: "2%",
                    marginLeft: "30%",
                    display: "grid",
                    gridTemplateColumns: "auto",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "#f2f2f4",
                        borderRadius: "30px",
                        width: "55%",
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
                        Active Quizzes
                    </Typography>
                    <Typography
                        sx={{
                            margin: "20px 15px",
                            textAlign: "center",
                            fontSize: "0.9rem",
                            color: "#000",
                        }}
                    >
                        This section includes all the Quizzes that are active
                        and eligible for the user to attempt. Kindly keep a
                        check on this section to attempt exciting quizzes and
                        challenges put forwsrd by our team at Technocrats
                        Robotics.
                    </Typography>
                    <Link to="/selectquiz" style={{ textDecoration: "none" }}>
                        <Button sx={{ width: "100%" }}>
                            <Badge
                                content="Attempt"
                                logout
                                style={{
                                    color: "#000",
                                    textAlign: "center",
                                    cursor: "pointer",
                                }}
                            />
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Content;
