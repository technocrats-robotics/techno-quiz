import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Answer from "./Answer";

function Objective({ index, question, options, total }) {
    return (
        <Box
            sx={{
                margin: "5rem",
                background:
                    "linear-gradient(145deg, black, rgba(0, 54, 103, 0), rgba(0,73,141, 0.7))",
                borderRadius: "2rem",
                paddingTop: "4rem",
                paddingLeft: "4rem",
                paddingRight: "4rem",
                paddingBottom: "3rem",
                border: "0.5px solid rgba(125,125,125, 0.5)",
            }}
        >
            <Typography
                variant="h4"
                component="h3"
                sx={{
                    marginBottom: "1.5rem",
                }}
            >
                Question No - 1/20
            </Typography>
            <Typography
                variant="h6"
                component="p"
                sx={{
                    fontWeight: "normal",
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                vel repudiandae et obcaecati error voluptate minima eum, omnis
                eaque amet nostrum optio ea perferendis ad consectetur totam
                quam esse, eligendi eius voluptatem ipsa? Tempore ut labore
                deleniti odio nostrum, aliquid eos exercitationem deserunt.
                Debitis nulla, cum placeat nobis aperiam et.
            </Typography>
            <Container
                maxWidth="xl"
                sx={{
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                }}
            >
                <Grid container spacing={4} alignItems="stretch">
                    <Grid item xs={6}>
                        <Answer />
                    </Grid>
                    <Grid item xs={6}>
                        <Answer />
                    </Grid>
                    <Grid item xs={6}>
                        <Answer />
                    </Grid>
                    <Grid item xs={6}>
                        <Answer />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Objective;
