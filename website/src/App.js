import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/team" element={<h1>Team</h1>} />
        <Route path="/roadmap" element={<h1>Roadmap</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
