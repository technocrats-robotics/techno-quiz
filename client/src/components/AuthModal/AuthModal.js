import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation, useRegisterMutation } from "../../app/services/api";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { selectCurrentUser, setUserState } from "../../features/Auth/authSlice";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthModal({ isActive, setIsActive }) {
    const [login, { isLoading }] = useLoginMutation();
    const [register, { isError }] = useRegisterMutation();
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);
    const [isOpenFail, setIsOpenFail] = useState(false);
    const [isOpenFailRequired, setIsOpenFailRequired] = useState(false);
    const [hasAccount, setHasAccount] = useState(true);
    const [loginCredentials, setLoginCredentials] = useState({
        email: "",
        password: "",
    });
    const [registerCredentials, setRegisterCredentials] = useState({
        email: "",
        username: "",
        password: "",
        name: "",
        repassword: "",
        department: "",
        registrationNumber: "",
    });

    const [isPasswordMatching, setIsPasswordMatching] = useState(false);
    const [toast, setToast] = useState(false);
    useEffect(() => {
        console.log("Use effect running");
        if (registerCredentials.password === registerCredentials.repassword) {
            setIsPasswordMatching(true);
            console.log("Matched");
        } else {
            setIsPasswordMatching(false);
        }
    }, [registerCredentials.repassword]);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            if (
                loginCredentials.email == "" ||
                loginCredentials.password == ""
            ) {
                setIsOpenFailRequired(true);
            } else {
                const response = await login(loginCredentials).unwrap();
                dispatch(setUserState(response));
                localStorage.setItem("token", response.token);
                setIsOpenSuccess(true);
                if (response.responseUser.role === "admin") {
                    navigator("/admin");
                } else {
                    navigator("/user");
                }
            }
        } catch (err) {
            console.log(err);
            setIsOpenFail(true);
        }
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        if (!isPasswordMatching) {
            setToast(true);
            console.log("Not matching");
            return;
        }
        let data = {
            name: registerCredentials.name,
            username: registerCredentials.username,
            email: registerCredentials.email,
            password: registerCredentials.password,
            department: registerCredentials.department,
            registrationNumber: registerCredentials.registrationNumber,
        };
        console.log(data);
        try {
            const response = await register(data).unwrap();
            if (isError) {
                console.log(isError);
                console.log("ERROR");
                alert("Something went wrong");
            } else {
                dispatch(setUserState(response));
                localStorage.setItem("token", response.token);

                alert(
                    "Registered Successfully. Please check your mail for verification"
                );
            }
        } catch (err) {
            console.log(err);
            alert("Error");
        }
    };

    return ReactDOM.createPortal(
        <>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                open={isOpenSuccess}
                onClose={() => {
                    console.log("Close");
                    setIsOpenSuccess(false);
                }}
                message="Logged In Successfully"
            >
                <Alert style={{ marginTop: "50px" }} severity="success">
                    Logged In Successfully
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                open={isOpenFail}
                onClose={() => {
                    console.log("Close");
                    setIsOpenFail(false);
                }}
                message="Invalid Email/Password"
            >
                <Alert style={{ marginTop: "50px" }} severity="error">
                    Invalid Email/Password. Try Again!
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                
                open={isOpenFailRequired}
                onClose={() => {
                    console.log("Close");
                    setIsOpenFailRequired(false);
                }}
                message="Please enter all the required fields"
            >
                <Alert style={{ marginTop: "50px" }} severity="warning">
                    Please enter all the required fields
                </Alert>
            </Snackbar>
            {hasAccount ? (
                <LoginModal
                    handleLogin={handleLogin}
                    setHasAccount={setHasAccount}
                    hasAccount={hasAccount}
                    credentials={loginCredentials}
                    setCredentials={setLoginCredentials}
                    isActive={isActive}
                    setIsActive={setIsActive}
                />
            ) : (
                <RegisterModal
                    handleRegister={handleRegister}
                    setHasAccount={setHasAccount}
                    hasAccount={hasAccount}
                    credentials={registerCredentials}
                    setCredentials={setRegisterCredentials}
                    isActive={isActive}
                    setIsActive={setIsActive}
                />
            )}
        </>,
        document.getElementById("portal")
    );
}

export default AuthModal;
