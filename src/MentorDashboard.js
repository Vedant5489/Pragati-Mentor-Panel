import React from 'react';

const DashboardCard = ({ icon, title, description }) => (
  <div className="border rounded-xl shadow-md p-5 w-full md:w-[30%] bg-white">
    <h3 className="text-lg font-semibold mb-2">{icon} {title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default function MentorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-10 py-6 border-b bg-white">
        <img src="/logo.png" alt="Uptoskills Logo" className="h-10" />
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Programs</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="px-6 md:px-20 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Mentor Dashboard</h1>

        <div className="flex flex-wrap justify-center gap-6">
          <DashboardCard 
            icon="🎓" 
            title="Track Assigned Students" 
            description="View and manage the students assigned to you with detailed profiles and progress logs." 
          />
          <DashboardCard 
            icon="📈" 
            title="Projects Progress" 
            description="Monitor the ongoing and completed projects of your students in real-time." 
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

      <footer className="bg-gray-900 text-white text-sm px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Uptoskills</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Programs</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Internships</a></li>
            <li><a href="#" className="hover:underline">Open Source</a></li>
            <li><a href="#" className="hover:underline">Hackathons</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>
      </footer>

      <div className="text-center text-xs py-4 bg-gray-800 text-gray-400">
        © 2025 Uptoskills, Built with 💻 by learners.
      </div>
    </div>
  );
}
