import { Box, Typography, Button } from "@mui/material";
import Badge from "../Badge";
import React from "react";
import { Link } from "react-router-dom";

function QuizCard({ data }) {
    return (
        <Box
            sx={{
                backgroundColor: "#f2f2f4",
                borderRadius: "30px",
                width: "70%",
                marginBottom: "5%",
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
                {data.name}
            </Typography>
            <Typography
                sx={{
                    margin: "20px 15px",
                    textAlign: "center",
                    fontSize: "0.9rem",
                    color: "#000",
                }}
            >
                {data.description}
            </Typography>
            <Link
                to={`/scheduleQuiz/${data._id}`}
                style={{ textDecoration: "none" }}
            >
                <Button sx={{ width: "100%" }}>
                    <Badge
                        content="Select"
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
    );
}

function Content({ quiz }) {
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
                Modify (Dept) Quiz
            </Typography>
            <Typography
                sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
            >
                Select the Quiz
            </Typography>
            {quiz.map((item) => (
                <QuizCard key={item._id} data={item} />
            ))}
        </Box>
    );
}

export default Content;
