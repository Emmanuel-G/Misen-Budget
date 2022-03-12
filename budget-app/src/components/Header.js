import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="app-brand">
        <Link to="/">
          <h2>MISEN Personal Budget</h2>
        </Link>
      </div>
      <div></div>

      <div className="login">
        <Link to="Signin">
          <div className="sign-in-btn">SIGN IN</div>
        </Link>
        <Link to="register">
          <div className="sign-up-link">Or Register *</div>
        </Link>
      </div>
      <div>
        <p>
          <strong>Guest</strong>
        </p>
      </div>
    </header>
  );
};

export default Header;
