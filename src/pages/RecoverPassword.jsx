// NPM packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
import logo from "../assets/pictures/logo.png";
import RecoverForm from "../components/RecoverForm";
import EmailSent from "../components/EmailSent";

export default function RecoverPassword() {
  //Local state
  const [email, setEmail] = useState();
  const [sent, setSent] = useState(false);

  return (
    <div className="recover-password">
      <header>
        <img className="logo" src={logo} alt="Netflix" />
        <Link className="link" to="/">
          Sign In
        </Link>
      </header>
      <div className="content">
        {!sent && (
          <RecoverForm emailState={[email, setEmail]} setSent={setSent} />
        )}
        {sent && <EmailSent email={email} />}
      </div>
    </div>
  );
}
