import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./pages/authentication/register";
import Login from "./pages/authentication/login";
import ForgotPasswordCode from "./pages/authentication/forgot-password-code";
import SetNewPassword from "./pages/authentication/set-new-password";
import Dashboard from "./pages/Dashboard";
import LatestNews from "./pages/News";
import Signals from "./pages/Signals";
import Posts from "./pages/Posts";
import Memberships from "./pages/Memberships";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Dashboard}>
          <Route path="/" Component={LatestNews} />
          <Route path="/signals" Component={Signals} />
          <Route path="/new-post" Component={Posts} />
          <Route path="/memberships" Component={Memberships} />
          <Route path="/settings" Component={Settings} />
        </Route>
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/forgot-password-code" Component={ForgotPasswordCode} />
        <Route path="/set-new-password" Component={SetNewPassword} />
      </Routes>
    </Router>
  );
}

export default App;
