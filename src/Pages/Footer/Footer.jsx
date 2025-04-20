import "./Footer.css"
import React from "react"
// Importing Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FaLinkedin } from "react-icons/fa";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import fiverIcon from "../../assets/images/removeBjFiver.png"
export default function Footer() {
    return (
        <>
            <footer id="footer">
                <p>Copyright © 2024 All rights reserved | This template is made <FavoriteIcon className="heartIcon" /> by Hamza Bin Nasir</p>
                <div className="footerIcoContainer">
                    <div className="iconDiv">
                        <a className="footerLink" href="https://www.linkedin.com/in/hamza-nasir-771161287/"><FaLinkedin className="footerIcon" /></a>
                    </div>
                    <div className="iconDiv">
                        <a className="footerLink" href="https://github.com/hamzabinnasir"><GitHubIcon className="footerIcon" /></a>
                    </div>
                    <div className="iconDiv">
                        <a className="footerLink" href="https://www.facebook.com/profile.php?id=61575199420536"><FacebookIcon className="footerIcon"/></a>
                    </div>
                    <div className="iconDiv">
                        <a className="footerLink" href="https://www.fiverr.com/sellers/hmza_developer2/edit"><img className="fiverIcon" src={fiverIcon} alt="no img" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}