// NPM packages
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import logo from "../assets/pictures/logo.png";

export default function NotLogged() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="Netflix" />
        <button onClick={() => navigate("/")}>Sign In</button>
      </header>
      <h1>Leaving so soon?</h1>
      <p>
        Just so you know, you don't always need to sign out of Netflix. It's
        only necessary if you're on a shared or public computer.
      </p>
      <p>You'll be redirected to Netflix.com in 30 seconds.</p>
      <button onClick={() => navigate("/")}>Go now</button>
    </div>
  );
}
