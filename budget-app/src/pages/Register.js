import Title from "../components/Title";
import Checkmark from "../checkmark1.jpg";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-left">
        <Title name={"Register a new account"} />
        <RegisterForm />
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
  );
};

export default Register;

const RegisterForm = () => {
  return (
    <form className="register-form">
      <div>
        <label>NAME:</label>
        <input type="text" />
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
        <label>PASSWORD:</label>
        <input type="text" />
      </div>
      <div>
        <label>CONFIRM PASSWORD:</label>
        <input type="text" />
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
        <input type="submit" />
      </div>
    </form>
  );
};
