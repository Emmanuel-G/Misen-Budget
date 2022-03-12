import Title from "../components/Title";
import Checkmark from "../checkmark1.jpg";

const SignIn = () => {
  return (
    <div className="signin-page">
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
        <SigninForm />
      </div>
    </div>
  );
};

export default SignIn;

const SigninForm = () => {
  return (
    <form className="signin-form">
      <div>
        <label>E-MAIL:</label>
        <input type="text" />
      </div>
      <div>
        <label>PASSWORD:</label>
        <input type="text" />
      </div>
      <br />
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
