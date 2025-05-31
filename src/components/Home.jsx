import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";
import bgImage from "../assets/bg.jpg";
import resumePDF from "../assets/Dilshan_Senanayaka_CV.pdf"; // Add your file here

export default function Home() {
  return (
    <section
      id="home"
      className="home-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="home-container">
        <div className="home-content">
          <div className="profile-pic">
            <img src={profilePic} alt="Dilshan Senanayaka" />
          </div>
          <div className="intro-text">
            <h1>Hello, I'm <span className="highlight">Dilshan Senanayaka</span></h1>
            <h2 className="tagline">Final Year ICT Undergraduate | Frontend | Mobile and Web Developer</h2>
            <p className="intro">
              I'm a passionate software developer experienced in building web and mobile applications.
              I specialize in React, Laravel, Firebase, and mobile app development using Android Studio | Flutter | React Native Expo.
              I love creating solutions that are both functional and beautifully crafted.
            </p>
            <div className="social-icons">
              <a href="https://github.com/Dilo1999" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/dilshan-senanayaka-7a78a9211" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:nimeshdilshan440@gmail.com">
                <FaEnvelope />
              </a>
            </div>

            {/* 📄 Download CV Button */}
            <div className="download-btn-container">
              <a href={resumePDF} download className="download-btn">
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
