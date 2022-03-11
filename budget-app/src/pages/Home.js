import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-left"></div>
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
          Click <strong>Register</strong> to create an account
        </p>
      </div>
      <div className="home-right"></div>
    </div>
  );
};

export default Home;
