import { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import Checkmark from "../images/checkmark1.jpg";
import Budget from "./Budget";

const SignIn = () => {
  const [success, setSuccess] = useState(false);

  return (
    <>
      {success ? (
        <Budget />
      ) : (
        <section className="signin-page">
          <div className="signin-right">
            <h2>Welcome back...</h2>
            <p>Your budget is waiting.</p>
            <p>Take action now and build your</p>
            <p>future today...</p>
            <h2>Lets go...</h2>
            <img src={Checkmark} alt="Check" />
          </div>
          <div className="signin-left">
            <Title name={"Sign in to your account"} />
            <SigninForm setSuccess={setSuccess} />
          </div>
        </section>
      )}
    </>
  );
};

export default SignIn;

const SigninForm = ({ setSuccess }) => {
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  // const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  // const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };
  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-MAIL:</label>
        <input
          type="text"
          id="signin-email"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
      </div>
      <div>
        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="signin-password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
      </div>
      <br />
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
