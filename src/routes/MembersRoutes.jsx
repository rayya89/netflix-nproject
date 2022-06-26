//NPM packages
import { Routes, Route } from "react-router-dom";

//Project files
import Signup from "../pages/Signup";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import RecoverPassword from "../pages/RecoverPassword";
import Browse from "../pages/Browse";

export default function MembersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/signup/regform" element={<Registration />} />
      <Route path="/loginHelp" element={<RecoverPassword />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
}

