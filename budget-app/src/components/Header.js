import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="app-brand">
        <h2>Misen Personal Budget</h2>
      </div>
      <div></div>
      <div></div>
      <div className="login">
        <Link to="Signin">
          <div className="sign-in-btn">SIGN IN</div>
        </Link>
        <Link to="register">
          <div className="sign-up-link">Or Register *</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
