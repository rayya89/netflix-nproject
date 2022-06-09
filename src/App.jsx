//NPM packages
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//Project files
import "./styles/styles.css";
import Signup from "./pages/Signup";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="/signup/regform" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
