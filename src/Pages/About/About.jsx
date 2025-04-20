import "./About.css";
import React from "react";
// Importing Components
import Headline from "../../components/Headline/Headline";
import CV from "../../assets/CV/Resume.pdf"
import ProfileImg from "../../assets/images/hamza1.jfif"

export default function About() {
    // Function to handle "Hire Me" button click
    const handleHireMeClick = () => {
        window.location.href = "https://www.linkedin.com/in/hamza-nasir-771161287/";
    };

    return (
        <>
            <div id="aboutSection">
                <div className="aboutContainer">
                    <img
                        id="mySelfHamza"
                        src= {ProfileImg}
                        alt="no img"
                    />
                    <div className="aboutContent">
                        <Headline text={"About"} subText={"Me"} />
                        <p className="aboutSimpleP">
                            I’m a frontend developer with a knack for creating responsive, user-friendly websites using HTML, CSS, and JavaScript.
                        </p>
                        <p className="smallPara">
                            I specialize in React.js and GSAP to build interactive, dynamic web applications. My goal is to deliver clean, efficient code and a superior user experience.
                        </p>
                        {/* Button Container */}
                        <div className="btnContainer">
                            <button id="hireBtn" onClick={handleHireMeClick}>Hire Me</button>
                            <button id="downloadBtn"><a className="link" href={CV} download>download cv</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
