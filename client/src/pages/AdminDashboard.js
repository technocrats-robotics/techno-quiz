import React, { useState } from "react";
import Content from "../components/Admin/Content";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import Header from "../components/Admin/Header";
import SideBar from "../components/Admin/Sidebar";

function AdminDashboard() {
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

export default AdminDashboard;
