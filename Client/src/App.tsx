import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./pages/authentication/register";
import Login from "./pages/authentication/login";
import ForgotPasswordCode from "./pages/authentication/forgot-password-code";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/forgot-password-code" Component={ForgotPasswordCode} />
      </Routes>
    </Router>
  );
}

export default App;
