import { useState } from "react";
import ReactDOM from "react-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function AuthModal() {
  const [hasAccount, setHasAccount] = useState(true);
  return ReactDOM.createPortal(
    <>
      {hasAccount ? (
        <LoginModal setHasAccount={setHasAccount} hasAccount={hasAccount} />
      ) : (
        <RegisterModal setHasAccount={setHasAccount} hasAccount={hasAccount} />
      )}
    </>,
    document.getElementById("portal")
  );
}

export default AuthModal;
