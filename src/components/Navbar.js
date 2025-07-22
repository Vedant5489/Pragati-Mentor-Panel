import React from "react";
import "../styles/navbar.css";
import logo from "./logo.png";

const Navbar = () => {
    return (
        <header className="dashboard-header">
            <img src={logo} alt="Uptoskills Logo" className="logo" />
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Programs</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
};

export default Navbar;
