import React, { useState } from "react";
import Content from "../components/User/Content";
import { Box } from "@mui/material";

import Header from "../components/User/Header";
import SideBar from "../components/User/Sidebar";

export default function UserDashboard() {
  const [hamburger, setHamburger] = useState(false);
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