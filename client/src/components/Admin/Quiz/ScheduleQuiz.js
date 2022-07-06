import * as React from "react";
import {
    Box,
    Button,
    Typography,
    TextField,
    Table,
    TableCell,
    TableHead,
    TableContainer,
    Paper,
    TableRow,
    TableBody,
    TablePagination,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { useIncludeQuesMutation } from "../../../app/services/api";

const FTypography = withStyles({
    root: {
        margin: "2% 9%",
        fontSize: "1rem",
        color: "#000",
        fontFamily: "Poppins",
        fontWeight: "bolder",
    },
})(Typography);

const FTextField = withStyles({
    root: {
        backgroundColor: "#C4C4C4",
        fontSize: "0.8rem",
    },
})(TextField);

const ActionButton = withStyles({
    root: {
        backgroundColor: "#0275d8",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#004a8a",
            color: "#fff",
        },
    },
})(Button);

function Content(data) {
    const rows = data.ques[0];
    const quizId = data.ques[1];
    const [rowsPerPage, setRowsPerPage] = React.useState(1);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    /*const handleInclude = (props) => {
      console.log(props);
  };*/
    const [includeQues, {}] = useIncludeQuesMutation();
    async function handleInclude(question) {
        try {
            const response = await includeQues({
                quizId: quizId,
                quesId: question,
            }).unwrap();
            console.log(response);
        } catch (err) {
            alert(err.data.err);
            console.log(err);
        }
    }
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
                Add Questions to Scheduled Quiz
            </Typography>
            <Typography
                sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
            >
                Select the Questions to finally publish the Quiz
            </Typography>
            <Box
                component="form"
                autoComplete="off"
                sx={{
                    margin: "20px",
                    marginLeft: "19%",
                    backgroundColor: "#f2f2f4",
                    borderRadius: "30px",
                    width: "60%",
                    "& .MuiTextField-root": {
                        ml: 9,
                        width: "65ch",
                        fontFamily: "Poppins",
                    },
                }}
            >
                <br></br>
                <FTypography> Quiz Title</FTypography>
                <FTextField
                    id="qtitle"
                    variant="filled"
                    size="small"
                    InputProps={{
                        style: {
                            color: "#343434",
                            fontWeight: "bolder",
                        },
                    }}
                    required
                />
                <br></br>
                <br></br>
                <FTypography>Question Handling</FTypography>
                <ul>{/*listItems*/}</ul>

                <TableContainer
                    component={Paper}
                    sx={{ maxWidth: "90%", marginLeft: "5%" }}
                >
                    <Table
                        sx={{ maxWidth: 450, marginLeft: "5%" }}
                        aria-label="simple table"
                    >
                        <TableHead rowCount={rows.length}>
                            <TableRow>
                                <TableCell sx={{ minWidth: 90 }}>ID</TableCell>
                                <TableCell sx={{ minWidth: 130 }} align="right">
                                    Statement
                                </TableCell>
                                <TableCell sx={{ minWidth: 130 }} align="right">
                                    Options
                                </TableCell>
                                <TableCell sx={{ minWidth: 80 }} align="right">
                                    Answer
                                </TableCell>
                                <TableCell sx={{ minWidth: 200 }} align="right">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell
                                            sx={{ maxWidth: 90 }}
                                            align="left"
                                        >
                                            {row._id.slice(0, 8)}
                                        </TableCell>
                                        <TableCell
                                            sx={{ maxWidth: 130 }}
                                            align="right"
                                        >
                                            {row.statement}
                                        </TableCell>
                                        <TableCell
                                            sx={{ maxWidth: 130 }}
                                            align="right"
                                        >
                                            {row.options.join(", ")}
                                        </TableCell>
                                        <TableCell
                                            sx={{ maxWidth: 80 }}
                                            align="right"
                                        >
                                            {row.answer}
                                        </TableCell>

                                        <TableCell align="right">
                                            <ActionButton
                                                sx={{
                                                    color: "#FFF",
                                                    backgroundColor: "#0275d8",
                                                    borderRadius: "0.5rem",
                                                    paddingLeft: "1.5rem",
                                                    paddingRight: "1.5rem",
                                                }}
                                                onClick={() =>
                                                    handleInclude(row._id)
                                                }
                                            >
                                                Include
                                            </ActionButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[1, 5, 10, 25]}
                    sx={{ display: "block" }}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <br></br>
                <br></br>
            </Box>
        </Box>
    );
}
export default Content;
