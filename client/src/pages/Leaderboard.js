import { Container, Grid, TableCell, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeaderQuiz from "../components/QuizPage/HeaderQuiz";
import Ranking from "../components/LeaderBoard/Ranking";

// Table imports

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Leaderboard() {
    const rows = [
        createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
        createData("Eclair", 262, 16.0, 24, 6.0),
        createData("Cupcake", 305, 3.7, 67, 4.3),
        createData("Gingerbread", 356, 16.0, 49, 3.9),
    ];

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    return (
        <>
            <HeaderQuiz />

            <Box
                sx={{
                    width: "100vw",
                    // height: "100%",
                    minHeight: "100vh",
                    background:
                        "linear-gradient(145deg,rgba(0,0,0,1),rgba(10,0,72,1),rgba(23,0,163,1))",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "6.5rem",
                }}
            >
                <Box>
                    <Typography
                        variant="h3"
                        component="h3"
                        align="center"
                        color="#FFFFFF"
                    >
                        Heading
                    </Typography>

                    <Typography
                        variant="h6"
                        component="h6"
                        align="center"
                        color="#FFFFFF"
                    >
                        Programming
                    </Typography>
                    <Box
                        sx={{
                            justifyContent: "center",
                            alignItems: " flex-end",
                            display: "flex",
                            paddingTop: "4.5rem",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="h6"
                                align="center"
                                color="#FFFFFF"
                                sx={{
                                    position: "absolute",
                                    top: "-1.5rem",
                                    width: "100%",
                                }}
                            >
                                Prateek
                            </Typography>
                            <img
                                src="/leaderBoard2.svg"
                                style={{
                                    height: "9rem",

                                    width: "7rem",
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="h6"
                                align="center"
                                color="#FFFFFF"
                                sx={{
                                    position: "absolute",
                                    top: "-1.5rem",
                                    width: "100%",
                                }}
                            >
                                Nimish
                            </Typography>
                            <img
                                src="/leaderBoard1.svg"
                                style={{
                                    height: "13rem",
                                    width: "7rem",
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="h6"
                                align="center"
                                color="#FFFFFF"
                                sx={{
                                    position: "absolute",
                                    top: "-1.5rem",
                                    width: "100%",
                                }}
                            >
                                ABC
                            </Typography>
                            <img
                                src="/leaderBoard3.svg"
                                style={{
                                    height: "6rem",

                                    width: "6rem",
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                <TableContainer
                    component={Paper}
                    sx={{
                        // marginTop: "100px",
                        backgroundColor: "#232323",
                        color: "#FFFFFF",
                        padding: "1.5rem",
                        // marginLeft: "1.5rem",
                        // marginRight: "1.5rem",
                        borderRadius: "1.5rem",
                        // paddingTop: "6rem",
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Dessert (100g serving)
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Calories
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Fat&nbsp;(g)
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Carbs&nbsp;(g)
                                </TableCell>
                                <TableCell
                                    align="right"
                                    sx={{
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Protein&nbsp;(g)
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        sx={{
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        {row.calories}
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        {row.fat}
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        {row.carbs}
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        {row.protein}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}

export default Leaderboard;
