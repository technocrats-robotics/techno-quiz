import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Content from "../components/User/Quiz/AttemptQuiz";
import Header from "../components/User/Header";
import SideBar from "../components/User/Sidebar";

function AttemptQuiz() {
  const [hamburger, setHamburger] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box>
      <Header setHamburger={setHamburger} hamburger={hamburger} />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          height: "100%",
          paddingTop: {
            xs: "4rem",
            sm: "6rem",
          },
        }}
      >
        <SideBar />
        <Content />
      </Box>
    </Box>
  );
}

export default AttemptQuiz;
