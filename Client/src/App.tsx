import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./pages/authentication/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Register} />
      </Routes>
    </Router>
  );
}

export default App;
