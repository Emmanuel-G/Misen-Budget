import { useEffect, useRef, useState } from "react";
import postData from "../api/postData";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = ({ setSuccess }) => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);

    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    postData("user", { user, pwd }).then((data) => setSuccess(data.message));
    console.log(user, pwd);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "off-screen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
      </div>
      <div>
        <label htmlFor="name">NAME:</label>
        <input
          type="text"
          id="name"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={userFocus && user && !validName ? "instructions" : "offscreen"}
        >
          4 to 24 characters. <br />
          Must begin with a letter. <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
      </div>
      <div>
        <label>SURNAME:</label>
        <input type="text" />
      </div>
      <div>
        <label>E-MAIL:</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
          8 to 24 characters. <br />
          Must include uppercase and lowercase letters, a number and a special character.{" "}
          <br />
          Allowed special characters: <span aria-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>
          <span aria-label="hashtag">#</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percent">%</span>
        </p>
      </div>
      <div>
        <label htmlFor="confirm_pwd">CONFIRM PASSWORD:</label>
        <input
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPwd(e.target.value)}
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <p
          id="confirmnote"
          className={matchFocus && !validMatch ? "instructions" : "offscreen"}
        >
          Must match the first password input field.
        </p>
      </div>
      <br />
      <div>
        <input type="checkbox" />
        <label>Add me to your mailing list</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>I agree to terms and conditions</label>
      </div>
      <br />
      <div>
        <button disabled={!validName || !validPwd || !validMatch ? true : false}>
          REGISTER
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
