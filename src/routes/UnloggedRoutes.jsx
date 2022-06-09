//NPM packages
import { Routes, Route } from "react-router-dom";

//Project files
import Signup from "../pages/Signup";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

export default function UnloggedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/signup/regform" element={<Registration />} />
    </Routes>
  );
}
