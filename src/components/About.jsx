import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p className="about-intro" variants={itemVariants}>
          Hi, I'm <strong>Dilshan Senanayaka</strong> — a passionate developer and quality assurance
          engineer with a knack for building and validating impactful software solutions.
        </motion.p>

        {/* Education */}
        <motion.div className="about-section" variants={itemVariants}>
          <h3>🎓 Education</h3>
          <p>
            Bachelor of Science (Hons) in Information and Communication Technology —{" "}
            <strong>University of Sri Jayewardenepura</strong><br />
            <em>Specialized in Software Technology (Sep 2021 – May 2025)</em>
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div className="about-section" variants={itemVariants}>
          <h3>💼 Experience</h3>
          <p>
            <strong>Intern Quality Assurance & Software Engineer – EDB Sri Lanka (2024 – Present)</strong><br />
            • Designed and executed manual test cases, performed functional, usability, regression, and API testing using Postman.<br />
            • Worked in Agile teams, tracked defects via JIRA, ensured SDLC integration, and performed cross-browser testing.<br />
            • Developed websites and mobile apps using Laravel and React Native.<br />
            • Built IoT-based automation systems with Firebase and Android Studio.<br />
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div className="about-section" variants={itemVariants}>
          <h3>🛠 Skills</h3>
          <ul className="skills-list">
            <li><strong>Development:</strong> React.js, Laravel, Flutter, PHP, Java, Python, Android Studio, .NET, Arduino</li>
            <li><strong>Quality Assurance:</strong> Manual Testing, Test Case Design, Regression Testing, API Testing (Postman), JIRA</li>
            <li><strong>Tools:</strong> Git, Docker, Selenium, Firebase, TestRail, Figma, Postman</li>
            <li><strong>Methodologies:</strong> Agile, SDLC, MVC Architecture, Defect Tracking, CI/CD</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
