import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeaderQuiz from "../components/QuizPage/HeaderQuiz";
import Ranking from "../components/LeaderBoard/Ranking";

function Leaderboard() {
  return (
    <Box
      sx={{
        background: "linear-gradient(145deg,rgba(0,9,53,1),rgba(8,0,101,1))",
        height: '100vh',
        color: "white",
        
      }}
    >
      <HeaderQuiz />
      <Typography
        variant="h3"
        component="h3"
        sx={{
          textAlign: "center",
          paddingTop: "2rem",
        }}
      >
        LEADERBOARD
      </Typography>

      <Grid container justifyContent={'center'} spacing={4} sx={{
            height:'100%',
      }}>
        <Grid item xs={3}>
          <Ranking />
        </Grid>
        <Grid item xs={3}>
          <Ranking />
        </Grid>
        <Grid item xs={3}>
          <Ranking />
        </Grid>
        <Grid item xs={3}>
          <Ranking />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Leaderboard;
