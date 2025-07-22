import React from "react";
import "../styles/styles.css";

const DashboardCard = ({ icon, title, description, onClick }) => (
    <div className="dashboard-card" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
        <h3>{icon} {title}</h3>
        <p>{description}</p>
    </div>
);

export default DashboardCard;
