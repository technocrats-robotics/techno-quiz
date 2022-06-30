import React from "react";
import {
    Box,
    Button,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import LoginLogo from "../Icons/login.svg";
import CancelIcon from "@mui/icons-material/Cancel";

// Radio buttons
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RegisterModal({
    setHasAccount,
    hasAccount,
    credentials,
    setCredentials,
    handleRegister,
    setIsActive,
}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("lg"));
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.7)",
                    zIndex: 1000,
                }}
            >
                <Box
                    sx={{
                        // margin: "5rem",
                        display: "flex",
                        background:
                            "linear-gradient(145deg,rgba(0,0,0,1),rgba(10,0,72,1),rgba(23,0,163,1))",
                        color: "white",
                        borderRadius: "3rem",
                        position: "absolute",
                        width: "60%",
                        height: "100%",
                        top: "2vh",
                        left: "20vw",
                        border: "10px solid white",
                        justifyContent: "space-around",
                        alignItems: "flex-start",
                        paddingTop: "6rem",
                        zIndex: 1000,
                        overflow: "hidden",

                        //  transform:"translate(0%,-40vh)",
                    }}
                >
                    {matches && (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h3" component={"h3"}>
                                Register
                            </Typography>
                            <img
                                src={LoginLogo}
                                style={{ maxWidth: "25rem" }}
                            />
                        </Box>
                    )}

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            // marginLeft:'2rem',
                            // marginRight:'20%',
                            paddingLeft: "3rem",
                            paddingRight: "3rem",
                            justifyContent: "center",
                            paddingTop: "1rem",
                            paddingBottom: "1rem",
                            width: {
                                lg: "inherit",
                                xs: "100%",
                            },
                        }}
                    >
                        <CancelIcon
                            className="cancel-icon"
                            style={{
                                width: "3rem",
                                position: "absolute",
                                top: 10,
                                right: 10,
                                height: "2rem",
                                "&:hover": { cursor: "pointer" },
                            }}
                            onClick={() => {
                                setIsActive(false);
                            }}
                        />
                        {!matches && (
                            <Typography
                                variant="h5"
                                component="h3"
                                sx={{
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Login
                            </Typography>
                        )}
                        <input
                            id="input"
                            label="Name"
                            placeholder="Name"
                            type="text"
                            value={credentials.name}
                            onChange={(event) => {
                                setCredentials({
                                    ...credentials,
                                    name: event.target.value,
                                });
                            }}
                            style={{
                                color: "white",
                                background: "#405893",
                                "&::placeholder": {
                                    color: "white",
                                },
                                borderRadius: "1.5rem",
                                border: "1px solid rgba(255,255,255,0.7)",
                                marginBottom: "1rem",
                                width: "100%",
                                outline: "none",
                                height: "3rem",
                                paddingLeft: "1.5rem",
                            }}
                        />
                        <input
                            id="input"
                            label="Email-Id"
                            placeholder="Email-Id"
                            type="email"
                            value={credentials.email}
                            onChange={(event) => {
                                setCredentials({
                                    ...credentials,
                                    email: event.target.value,
                                });
                            }}
                            style={{
                                color: "white",
                                background: "#405893",
                                "&::placeholder": {
                                    color: "white",
                                },
                                borderRadius: "1.5rem",
                                border: "1px solid rgba(255,255,255,0.7)",
                                marginBottom: "1rem",
                                width: "100%",
                                outline: "none",
                                height: "3rem",
                                paddingLeft: "1.5rem",
                            }}
                        />
                        <input
                            id="input"
                            label="Username"
                            placeholder="username"
                            type="text"
                            value={credentials.username}
                            onChange={(event) => {
                                setCredentials({
                                    ...credentials,
                                    username: event.target.value,
                                });
                            }}
                            style={{
                                color: "white",
                                background: "#405893",
                                "&::placeholder": {
                                    color: "white",
                                },
                                borderRadius: "1.5rem",
                                border: "1px solid rgba(255,255,255,0.7)",
                                marginBottom: "1rem",
                                width: "100%",
                                outline: "none",
                                height: "3rem",
                                paddingLeft: "1.5rem",
                            }}
                        />
                        <input
                            id="input"
                            label="Password"
                            placeholder="Password"
                            type="password"
                            value={credentials.password}
                            onChange={(event) => {
                                setCredentials({
                                    ...credentials,
                                    password: event.target.value,
                                });
                            }}
                            style={{
                                color: "white",
                                background: "#405893",
                                "::placeholder": {
                                    color: "white",
                                },
                                borderRadius: "1.5rem",
                                border: "none",
                                marginBottom: "1rem",
                                width: "100%",
                                outline: "none",
                                height: "3rem",
                                paddingLeft: "1.5rem",
                            }}
                        />
                        <input
                            id="input"
                            label="Re-enter Password"
                            placeholder="Re-enter Password"
                            type="password"
                            value={credentials.repassword}
                            onChange={(event) => {
                                setCredentials({
                                    ...credentials,
                                    repassword: event.target.value,
                                });
                            }}
                            style={{
                                color: "white",
                                background: "#405893",
                                "::placeholder": {
                                    color: "white",
                                },
                                borderRadius: "1.5rem",
                                border: "none",
                                marginBottom: "1rem",
                                width: "100%",
                                outline: "none",
                                height: "3rem",
                                paddingLeft: "1.5rem",
                            }}
                        />
                        {/* RegistrationNumber */}
                        <input
                            id="input"
                            label="Enter Registration Number"
                            placeholder="Enter Registration Number"
                            type="text"
                            value={credentials.registrationNumber}
                            onChange={(event) => {
                                setCredentials({
                                    ...credentials,
                                    registrationNumber: event.target.value,
                                });
                            }}
                            style={{
                                color: "white",
                                background: "#405893",
                                "::placeholder": {
                                    color: "white",
                                },
                                borderRadius: "1.5rem",
                                border: "none",
                                marginBottom: "1rem",
                                width: "100%",
                                outline: "none",
                                height: "3rem",
                                paddingLeft: "1.5rem",
                            }}
                        />
                        {/* Department */}

                        <FormControl>
                            <FormLabel
                                id="demo-radio-buttons-group-label"
                                style={{ color: "#FFF", fontWeight: "bolder" }}
                            >
                                Department
                            </FormLabel>

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                // defaultValue="Programming"
                                name="radio-buttons-group"
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <FormControlLabel
                                    value="Programming"
                                    control={
                                        <Radio
                                            sx={{
                                                color: "#ffe500",
                                                "&.Mui-checked": {
                                                    color: "#ffe500",
                                                },
                                            }}
                                        />
                                    }
                                    label="Programming"
                                    onClick={(event) => {
                                        setCredentials({
                                            ...credentials,
                                            department: "Programming",
                                        });
                                    }}
                                />
                                <FormControlLabel
                                    value="Electrical"
                                    control={
                                        <Radio
                                            sx={{
                                                color: "#ffe500",
                                                "&.Mui-checked": {
                                                    color: "#ffe500",
                                                },
                                            }}
                                        />
                                    }
                                    label="Electrical"
                                    onClick={(event) => {
                                        setCredentials({
                                            ...credentials,
                                            department: "Electrical",
                                        });
                                    }}
                                />
                                <FormControlLabel
                                    value="Mechanical"
                                    control={
                                        <Radio
                                            sx={{
                                                color: "#ffe500",
                                                "&.Mui-checked": {
                                                    color: "#ffe500",
                                                },
                                            }}
                                        />
                                    }
                                    label="Mechanical"
                                    onClick={(event) => {
                                        setCredentials({
                                            ...credentials,
                                            department: "Mechanical",
                                        });
                                    }}
                                />
                                <FormControlLabel
                                    value="Management"
                                    control={
                                        <Radio
                                            sx={{
                                                color: "#ffe500",
                                                "&.Mui-checked": {
                                                    color: "#ffe500",
                                                },
                                            }}
                                        />
                                    }
                                    label="Management"
                                    onClick={(event) => {
                                        setCredentials({
                                            ...credentials,
                                            department: "Management",
                                        });
                                    }}
                                />
                            </RadioGroup>
                        </FormControl>

                        <Typography variant="p" component={"p"}>
                            Do have an account ?
                            <Typography
                                variant="span"
                                component={"span"}
                                onClick={() => setHasAccount(!hasAccount)}
                                style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                            >
                                Login
                            </Typography>
                        </Typography>
                        <Button
                            onClick={handleRegister}
                            variant="contained"
                            style={{
                                color: "white",
                                background: "#FFE500",
                                width: "100%",
                                borderRadius: "1.5rem",
                                paddingTop: "1rem",
                                paddingBottom: "1rem",
                                marginTop: "1rem",
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </div>
        </>
    );
}

export default RegisterModal;
