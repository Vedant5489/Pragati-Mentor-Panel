import React, { useState } from "react";
import "../styles/opensource.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contributionsData = [
    {
        platform: "GitHub",
        platformIcon: "github",
        repository: "UptoSkills LMS",
        summary: "Fixed bug in admin dashboard",
        date: "September 23, 2024",
    },
    {
        platform: "GitLab",
        platformIcon: "gitlab",
        repository: "OpenEdx Platform",
        summary: "Fixed issue error ants",
        date: "January 22, 2024",
    },
    {
        platform: "GitHub",
        platformIcon: "github",
        repository: "OpenEdx Platform",
        summary: "Fixed UI flaws",
        date: "August 31, 2023",
    },
    {
        platform: "GitLab",
        platformIcon: "gitlab",
        repository: "Grafana",
        summary: "Fixed UX progress",
        date: "February 14, 2023",
    },
    {
        platform: "GitHub",
        platformIcon: "github",
        repository: "OpenEdx Platform",
        summary: "Implementation of new client type",
        date: "December 11, 2022",
    },
    {
        platform: "GitHub",
        platformIcon: "github",
        repository: "Godotx",
        summary: "Adding the manual function",
        date: "November 2, 2022",
    },
];

const platformIcons = {
    github: (
        <svg
            height="20"
            width="20"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className="icon"
        >
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.007-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.63 7.63 0 012-.27c.68.003 1.37.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8Z"></path>
        </svg>
    ),
    gitlab: (
        <svg
            height="20"
            width="20"
            viewBox="0 0 36 36"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className="icon"
        >
            <path d="M18 0L12.8 10.666H1.2L15.2 35.333 18 28.8 20.8 35.333 34.8 10.666H23.2L18 0zM12.8 10.666 18 0l5.2 10.666H12.8z"></path>
        </svg>
    ),
};

function OpenSourceContributions() {
    const [selectedUser, setSelectedUser] = useState("Mahesh Bagul");

    const onUserChange = (e) => {
        setSelectedUser(e.target.value);
    };

    return (
        <>
            <Navbar />
            <main className="container main-content" role="main">
                <h1 className="center-heading">Open Source Contributions</h1>
                <p className="subtitle center-heading">
                    Monitor, review and approve your student’s commits, pull requests,
                    and milestones across open-source platforms.
                </p>
                <section className="activity-section" aria-label="User contributions">
                    <div className="activity-header">
                        <button className="tab active" aria-selected="true" role="tab">
                            Activity
                        </button>
                        <div className="user-select-box">
                            <select
                                aria-label="Select user"
                                value={selectedUser}
                                onChange={onUserChange}
                            >
                                <option value="Mahesh Bagul">Mahesh Bagul</option>
                                {/* Additional user options possible */}
                            </select>
                        </div>
                    </div>
                    <table className="contributions-table" role="grid">
                        <thead>
                            <tr>
                                <th scope="col">Platform</th>
                                <th scope="col">Repository</th>
                                <th scope="col">Summary</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contributionsData.map((item, index) => (
                                <tr key={index}>
                                    <td className="platform-cell" aria-label={item.platform}>
                                        <span className="platform-icon">
                                            {platformIcons[item.platformIcon]}
                                        </span>
                                        <span className="platform-name">{item.platform}</span>
                                    </td>
                                    <td>{item.repository}</td>
                                    <td>{item.summary}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default OpenSourceContributions;