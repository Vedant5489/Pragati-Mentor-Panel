import React from "react";
import "../styles/styles.css";

const Footer = () => {
    return (
        <>
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
        </>
    );
};

export default Footer;
