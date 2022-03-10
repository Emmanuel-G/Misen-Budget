import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h2>Welcome to</h2>
      <h1>Misen Personal Budget Tool</h1>
      <p>
        Click <Link to="Signin">sign-in</Link> to sign in to your account or
      </p>
      <p>Clic sign up to create a new account</p>
    </div>
  );
};

export default Home;
