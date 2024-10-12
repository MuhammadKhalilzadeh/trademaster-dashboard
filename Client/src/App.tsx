import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./pages/authentication/register";
import Login from "./pages/authentication/login";
import ForgotPasswordCode from "./pages/authentication/forgot-password-code";
import SetNewPassword from "./pages/authentication/set-new-password";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/forgot-password-code" Component={ForgotPasswordCode} />
        <Route path="/set-new-password" Component={SetNewPassword} />
      </Routes>
    </Router>
  );
}

export default App;
