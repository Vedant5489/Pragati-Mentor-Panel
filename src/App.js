import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MentorDashboard } from "./pages/MentorDashboard";
import ProjectsProgress from "./pages/ProjectsProgress";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MentorDashboard />} />
        <Route path="/projects-progress" element={<ProjectsProgress />} />
      </Routes>
    </Router>
  );
}

export default App;
