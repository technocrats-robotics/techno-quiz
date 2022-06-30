import { Box, Typography, Button, Grid } from "@mui/material";
import Badge from "../Badge";
import React from "react";
import { Link } from "react-router-dom";
import { borderRadius } from "@mui/system";
import {
    useEvaluateQuizMutation,
    usePublishQuizMutation,
} from "../../../app/services/api";

function QuizCard({ data }) {
    const [publish, { isLoading, isError, isSuccess }] =
        usePublishQuizMutation();
    const [evaluate, {}] = useEvaluateQuizMutation();

    const handlePublish = async (event) => {
        event.preventDefault();

        try {
            const response = await publish({ quizId: data._id }).unwrap();
            console.log(response);
            alert("success");
        } catch (err) {
            alert(err.data.err);
            console.log(err);
        }
    };
    const handleEvaluate = async (event) => {
        event.preventDefault();

        try {
            const response = await evaluate(data._id).unwrap();
            console.log(response);
            alert("success");
        } catch (err) {
            alert("failed");
            console.log(err);
        }
    };
    return (
        <Box
            sx={{
                backgroundColor: "#f2f2f4",
                borderRadius: "30px",
                width: "32vw",
                marginBottom: "5%",
                marginTop: "5%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "1.5rem",
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
            <Box>
                <Link
                    to={`/scheduleQuiz/${data.department}/${data._id}`}
                    style={{ textDecoration: "none" }}
                >
                    <Button
                        sx={{
                            color: "#FFF",
                            backgroundColor: "#f0ad4e",
                            borderRadius: "0.5rem",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                            marginLeft: "0.4rem",
                        }}
                    >
                        Select
                    </Button>
                </Link>

                {!data.isEvaluated && (
                    <Button
                        sx={{
                            color: "#FFF",
                            backgroundColor: "#0275d8",
                            borderRadius: "0.5rem",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                            marginLeft: "0.4rem",
                        }}
                        onClick={handleEvaluate}
                    >
                        Evaluate
                    </Button>
                )}
                {data.isEvaluated && (
                    <Button
                        sx={{
                            color: "#FFF",
                            backgroundColor: "#0275d8",
                            borderRadius: "0.5rem",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                            marginLeft: "0.4rem",
                        }}
                    >
                        Evaluated
                    </Button>
                )}

                {!data.isPublished && (
                    <Button
                        sx={{
                            color: "#FFF",
                            backgroundColor: "#5cb85c",
                            borderRadius: "0.5rem",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                            marginLeft: "0.4rem",
                        }}
                        onClick={handlePublish}
                    >
                        PUBLISH
                    </Button>
                )}
                {data.isPublished && (
                    <Button
                        sx={{
                            color: "#FFF",
                            backgroundColor: "#5cb85c",
                            borderRadius: "0.5rem",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                            marginLeft: "0.4rem",
                        }}
                    >
                        Already Published
                    </Button>
                )}
            </Box>
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
            <Grid container spacing={2} sx={{ mx: "3rem" }}>
                {quiz.map((item) => (
                    <Grid item xs={4}>
                        <QuizCard key={item._id} data={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Content;
