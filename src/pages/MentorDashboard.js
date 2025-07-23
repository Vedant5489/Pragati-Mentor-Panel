import React from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

export const MentorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <Navbar />

      <main className="dashboard-main">
        <h1>Mentor Dashboard</h1>

        <div className="card-container">
          <DashboardCard
            icon="🎓"
            title="Track Assigned Students"
            description="View and manage the students assigned to you with detailed profiles and progress logs."
          />
          <DashboardCard
            icon="📈"
            title="Projects Progress"
            description="Monitor the ongoing and completed projects of your students in real-time."
            onClick={() => navigate("/projects-progress")}
          />
          <DashboardCard
            icon="🧠"
            title="Skill Assessments"
            description="Analyze performance through quizzes, tests, and continuous assessments."
          />
          <DashboardCard
            icon="🌐"
            title="Open Source Contributions"
            description="Review your student’s pull requests, commits, and activity on open source platforms."
            onClick={() => navigate("/open-source-contributions")}
          />
          <DashboardCard
            icon="📝"
            title="Feedback & Approvals"
            description="Give personalized feedback and approve submitted milestones with ease."
          />
          <DashboardCard
            icon="👥"
            title="Multi-Student View"
            description="Easily toggle between multiple students to evaluate and mentor efficiently."
          />
        </div>
      </main>

      <footer className="dashboard-footer">
        <div>
          <h4>Uptoskills</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div>
          <h4>Programs</h4>
          <ul>
            <li><a href="#">Internships</a></li>
            <li><a href="#">Open Source</a></li>
            <li><a href="#">Hackathons</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </footer>

      <div className="dashboard-bottom">
        © 2025 Uptoskills, Built with 💻 by learners.
      </div>
    </div>
  );
};

export default MentorDashboard;
