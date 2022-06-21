import React, { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Content from "../components/Admin/Quiz/ModifyDeptQuiz";
import Header from "../components/Admin/Header";
import SideBar from "../components/Admin/Sidebar";
import { useParams } from "react-router-dom";
import { useGetAllQuizQuery } from "../app/services/api";

function ModifyDeptQuiz() {
    const { deptid } = useParams();

    console.log(deptid);

    const [hamburger, setHamburger] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    const { data, isLoading, isSuccess } = useGetAllQuizQuery(deptid);

    console.log(data);
    return (
        isSuccess &&
        !isLoading && (
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
                    <Content quiz={data.data} />
                </Box>
            </Box>
        )
    );
}

export default ModifyDeptQuiz;
