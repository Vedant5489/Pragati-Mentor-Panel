import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const students = [
    {
        name: "Angat Mali",
        email: "angat.mali@example.com",
        project: "Learning Platform",
        progress: 40,
        avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
        name: "Pragya Jha",
        email: "pragya.jha@example.com",
        project: "Portfolio Website",
        progress: 70,
        avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
        name: "Freddy Fernandes",
        email: "freddy.fernandes@example.com",
        project: "Mobile App",
        progress: 60,
        avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
        name: "Pravin Goswami",
        email: "pravin.goswami@example.com",
        project: "Learning Platform",
        progress: 30,
        avatar: "https://i.pravatar.cc/100?img=4",
    },
    {
        name: "Shruti Biradar",
        email: "shruti.biradar@example.com",
        project: "Learning Platform",
        progress: 80,
        avatar: "https://i.pravatar.cc/100?img=5",
    },
];

const ProjectsProgress = () => {
    return (
        <div>
            <Navbar />
            <main style={{ padding: "40px", textAlign: "center" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
                    Track Assigned Students <br /> and Progress
                </h1>
                <p style={{ color: "#555", marginBottom: "30px" }}>
                    View and manage the students assigned to you with detailed profiles and progress logs.
                </p>

                <div
                    style={{
                        margin: "0 auto",
                        maxWidth: "900px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid #e0e0e0",
                    }}
                >
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead style={{ background: "#fafafa" }}>
                            <tr>
                                <th style={thStyle}>Student</th>
                                <th style={thStyle}>Project</th>
                                <th style={thStyle}>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index} style={{ borderBottom: "1px solid #f0f0f0" }}>
                                    <td style={tdStyle}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <img
                                                src={student.avatar}
                                                alt={student.name}
                                                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                            />
                                            <div style={{ textAlign: "left" }}>
                                                <div style={{ fontWeight: "bold" }}>{student.name}</div>
                                                <div style={{ fontSize: "0.9rem", color: "#777" }}>{student.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={tdStyle}>{student.project}</td>
                                    <td style={tdStyle}>
                                        <div
                                            style={{
                                                backgroundColor: "#eee",
                                                borderRadius: "10px",
                                                overflow: "hidden",
                                                height: "10px",
                                                width: "100%",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: `${student.progress}%`,
                                                    backgroundColor: "#005bff",
                                                    height: "100%",
                                                }}
                                            ></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
};

const thStyle = {
    textAlign: "left",
    padding: "16px",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#333",
};

const tdStyle = {
    padding: "16px",
    fontSize: "0.95rem",
    color: "#444",
};

export default ProjectsProgress;
