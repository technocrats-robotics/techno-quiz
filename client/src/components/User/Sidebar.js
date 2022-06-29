import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import Man from "../Icons/Man.png";
import Badge from "../Admin/Badge";
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
                    to="/leaderboard/62b3340d55fd97e0d427b39d"
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
                <Button>
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
