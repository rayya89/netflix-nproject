//NPM packages
import { useNavigate, Link } from "react-router-dom";

//Project files
import logo from "../assets/pictures/logo.png";
import InputField from "../components/InputField";
import form from "../data/signupForm.json";
import { useUser } from "../state/UserContext";

export default function Signup() {
  //Global state
  const { email, setEmail } = useUser();

  //Properties
  const navigate = useNavigate();

  //Methods
  function onSubmit(event) {
    event.preventDefault();
    navigate("/signup/regform");
  }

  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="Netflix" />
        <Link to="/">Sign In</Link>
      </header>
      <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere. Cancel at any time.</h2>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="form" onSubmit={onSubmit}>
        <InputField setup={form.email} state={[email, setEmail]} />
        <button>Get Started</button>
      </form>
    </div>
  );
}
