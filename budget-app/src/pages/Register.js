import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Title from "../components/Title";
import NoBudget from "./NoBudget";
import Checkmark from "../images/checkmark1.jpg";

const Register = () => {
  const [success, setSuccess] = useState(false);

  return (
    <>
      {success ? (
        <NoBudget />
      ) : (
        <div className="register-page">
          <div className="register-left">
            <Title name={"Register a new account"} />
            <RegisterForm setSuccess={setSuccess} />
          </div>
          <div className="register-right">
            <h2>Sign Up</h2>
            <br />
            <p>Take your first step</p>
            <p>in securing your financial future</p>
            <p>today...</p>
            <br />
            <h2>Let's go!!!</h2>
            <img src={Checkmark} alt="Check" />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
