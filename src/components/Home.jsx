import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";
import resumePDF from "../assets/Dilshan_Senanayaka_CV.pdf";

function FallingLetters({ text }) {
  return (
    <span className="falling-letters">
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className="falling-letter"
          style={{ animationDelay: `${idx * 0.2}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function AnimatedSentence() {
  const fullText =
    "I'm a passionate software developer experienced in building web and mobile applications.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 50); // typing speed

    return () => clearInterval(interval);
  }, []);

  return <span className="animated-sentence">{displayedText}</span>;
}

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let comets = [];

    function createComet() {
      return {
        x: Math.random() * canvas.width,
        y: -20,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 5 + 2,
        angle: Math.PI / 4,
        alpha: 1,
      };
    }

    function drawComet(c) {
      const xEnd = c.x + Math.cos(c.angle) * c.length;
      const yEnd = c.y + Math.sin(c.angle) * c.length;
      const grad = ctx.createLinearGradient(c.x, c.y, xEnd, yEnd);
      grad.addColorStop(0, `rgba(34, 211, 238, ${c.alpha})`);
      grad.addColorStop(1, `rgba(34, 211, 238, 0)`);

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(xEnd, yEnd);
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.02) comets.push(createComet());

      comets.forEach((comet, index) => {
        comet.x += comet.speed * Math.cos(comet.angle);
        comet.y += comet.speed * Math.sin(comet.angle);
        comet.alpha -= 0.005;

        if (comet.alpha <= 0) comets.splice(index, 1);
        else drawComet(comet);
      });

      requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="home-section">
      <canvas ref={canvasRef} className="comet-canvas" />
      <div className="home-container">
        <div className="home-content">
          <div className="profile-pic">
            <img src={profilePic} alt="Dilshan Senanayaka" />
          </div>
          <div className="intro-text">
            <h1>
              Hello, I'm <FallingLetters text="Dilshan Senanayaka" />
            </h1>
            <h2 className="tagline">
              Final Year ICT Undergraduate | Frontend | Mobile and Web Developer
            </h2>
            <p className="intro">
              <AnimatedSentence />
              <span>
                {" "}
                I specialize in React, Laravel, Firebase, and mobile app
                development using Android Studio | Flutter | React Native Expo.
                I love creating solutions that are both functional and
                beautifully crafted.
              </span>
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/Dilo1999"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dilshan-senanayaka-7a78a9211"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:nimeshdilshan440@gmail.com">
                <FaEnvelope />
              </a>
            </div>
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
