import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation, useRegisterMutation } from "../../app/services/api";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { setUserState } from "../../features/Auth/authSlice";
import Alert from "@mui/material/Alert";

function AuthModal() {
  const [login, { isLoading }] = useLoginMutation();
  const [register, { isError }] = useRegisterMutation();
  const dispatch = useDispatch();
  const [hasAccount, setHasAccount] = useState(true);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [registerCredentials, setRegisterCredentials] = useState({
    email: "",
    password: "",
    name: "",
    repassword: "",
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
      const response = await login(loginCredentials).unwrap();
      dispatch(
        setUserState({ user: response.responseUser, token: response.token })
      );
      alert("Successful");
    } catch (err) {
      console.log(err);
      alert("Error");
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
      email: registerCredentials.email,
      password: registerCredentials.password,
    };
    try {
      const response = await register(data).unwrap();
      dispatch(
        setUserState({ user: response.responseUser, token: response.token })
      );
      alert("Successful");
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  return ReactDOM.createPortal(
    <>
      {toast && (
        <Alert severity="error" style={{ zIndex: 100000, position: "fixed" }}>
          Password not Matching
        </Alert>
      )}
      {hasAccount ? (
        <LoginModal
          handleLogin={handleLogin}
          setHasAccount={setHasAccount}
          hasAccount={hasAccount}
          credentials={loginCredentials}
          setCredentials={setLoginCredentials}
        />
      ) : (
        <RegisterModal
          handleRegister={handleRegister}
          setHasAccount={setHasAccount}
          hasAccount={hasAccount}
          credentials={registerCredentials}
          setCredentials={setRegisterCredentials}
        />
      )}
    </>,
    document.getElementById("portal")
  );
}

export default AuthModal;
