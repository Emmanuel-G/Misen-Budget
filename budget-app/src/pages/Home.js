import { Link } from "react-router-dom";
import budImage1 from "../budget1.jpg";
import budImage2 from "../budget2.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-left">
        <img src={budImage1} alt="budget1" />
      </div>
      <div className="home-center">
        <h2>Welcome to</h2>
        <h1>Misen Personal Budget Tool</h1>
        <p>
          Click{" "}
          <Link to="Signin">
            <strong>Sign-in</strong>
          </Link>{" "}
          to sign in to your account or
        </p>
        <p>
          Click{" "}
          <Link to="Register">
            <strong>Register</strong>
          </Link>{" "}
          to create an account
        </p>
      </div>
      <div className="home-right">
        <img src={budImage2} alt="budget2" />
      </div>
    </div>
  );
};

export default Home;
