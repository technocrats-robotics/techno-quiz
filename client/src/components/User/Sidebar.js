import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import Man from "../Icons/Man.png";
import Badge from "../Admin/Badge";
import { useDispatch } from "react-redux";
import { removeUserState } from "../../features/Auth/authSlice";


const CTypography = withStyles({
    root: {
        color: "#000",
        textAlign: "center",
        margin: "5px",
        fontSize: "1.2rem",
        fontFamily: "Roboto",
        "&:hover": {
            background: "#080136",
            color: "#FFF",
            borderRadius: "10px 0 0 10px",
            marginRight: "0px",
            marginLeft: "30px",
            padding: "5px",
            cursor: "pointer",
        },
    },
})(Typography);
export default function SideBar() {

    const dispatch = useDispatch();
    const navigator = useNavigate();
    
    return (
        <Box
            sx={{
                position: "static",
                width: "20vw",
                backgroundColor: "#080136",
                color: "white",
                borderRight: "1px solid #eee",
                overflow: "hidden",
                marginTop: "-96px",
            }}
            display={{
                xs: "none",
                md: "block",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "#FFF",
                    marginTop: "140px",
                    borderRadius: "30px",
                    marginLeft: "25px",
                    marginRight: "20px",
                }}
            >
                <Link to="/user" style={{ textDecoration: "none" }}>
                    <CTypography style={{ marginTop: "40px" }}>
                        {" "}
                        Dashboard{" "}
                    </CTypography>
                </Link>
                <Link
                    to="/leaderboard"
                    style={{ textDecoration: "none" }}
                >
                    <CTypography> Leaderboard </CTypography>
                </Link>
                <Link to="/attemptquiz" style={{ textDecoration: "none" }}>
                    <CTypography> Quiz Tracks</CTypography>
                </Link>
                {/* <Link> */}
                <CTypography> View Attempts </CTypography>
                {/* </Link> */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        marginLeft: "1.5rem",
                        margin: "20px",
                    }}
                >
                    <img
                        src={Man}
                        style={{
                            width: "100px",
                            height: "140px",
                        }}
                        alt="Dashboard"
                    />
                </IconButton>
                <Button onClick={() => {
                    dispatch(removeUserState);
                    localStorage.removeItem('token');
                    navigator("/");
                }} >
                    <Badge
                        content="Logout"
                        logout
                        style={{
                            color: "#000",
                            textAlign: "center",
                            cursor: "pointer",
                        }}
                    />
                </Button>
            </Box>
        </Box>
    );
}
