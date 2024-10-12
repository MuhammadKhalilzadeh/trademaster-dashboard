import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./pages/authentication/register";
import Login from "./pages/authentication/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
