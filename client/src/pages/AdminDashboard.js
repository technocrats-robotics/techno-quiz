import React, { useEffect, useState } from "react";
import Content from "../components/Admin/Content";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import Header from "../components/Admin/Header";
import SideBar from "../components/Admin/Sidebar";
import { selectCurrentUser } from "../features/Auth/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken"

function AdminDashboard() {
    const [hamburger, setHamburger] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const navigator = useNavigate();
    const currentUser = useSelector(selectCurrentUser);
    console.log(currentUser);

    useEffect(() => {
        const token=localStorage.getItem('token')
        console.log(token)
        const user=jwt.decode(token)
        console.log(user)
        
        
        if (!user || user.role!='admin') {
            alert("You are not loggedin/authorized");
            navigator("/");
        }
    }, []);

    return (
        <Box>
            <Header setHamburger={setHamburger} hamburger={hamburger} />
            <Box
                sx={{
                    display: "flex",
                    minHeight: "100vh",
                    height: "100%",
                    paddingTop: {
                        xs: "3rem",
                        sm: "3rem",
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
