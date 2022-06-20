import { Box, Typography, Button } from "@mui/material";
import Badge from "../../Admin/Badge";
import React from "react";
import { Link } from "react-router-dom";
import { useGetAvailableQuizQuery } from "../../../app/services/api";

function QuizCard({ card }) {
    return (
        <Box
            sx={{
                width: "80%",
                margin: "2% 15%",
                display: "grid",
                gridTemplateColumns: "auto auto",
            }}
        >
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
                    {card.name}
                </Typography>
                <Typography
                    sx={{
                        margin: "20px 15px",
                        textAlign: "center",
                        fontSize: "0.9rem",
                        color: "#000",
                    }}
                >
                    {card.description}
                </Typography>
                <Typography
                    sx={{
                        margin: "10px 15px",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                        color: "#000",
                    }}
                >
                    {new Date(card.end).toLocaleTimeString("en-US")}
                </Typography>
                <Link
                    to={`/quiz/${card._id}`}
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
        </Box>
    );
}

function Content() {
    const { data, isLoading, isError } = useGetAvailableQuizQuery();
    console.log(data);
    return (
        !isLoading &&
        !isError && (
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
                    Live Quizzes
                </Typography>
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "1rem",
                        margin: "2px",
                    }}
                >
                    All the Best, Ace It!!
                </Typography>
                <Box
                    sx={{
                        width: "80%",
                        margin: "2% 15%",
                        display: "grid",
                        gridTemplateColumns: "auto auto",
                    }}
                >
                    {data.data.map((card) => (
                        <QuizCard key={card._id} card={card} />
                    ))}
                </Box>
            </Box>
        )
    );
}

export default Content;
