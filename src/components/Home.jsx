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
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <span className="animated-sentence">{displayedText}</span>;
}

export default function Home() {
  const canvasRef = useRef(null);
  const profileRef = useRef(null);
  const [dotStyle, setDotStyle] = useState({
    left: 0,
    top: 0,
    backgroundColor: "hsl(0, 100%, 50%)",
  });
  const hueRef = useRef(0);

  useEffect(() => {
    if (!profileRef.current) return;

    const radius = 100; // radius of the orbit path (adjust as needed)
    const centerX = radius;
    const centerY = radius;
    const dotRadius = 16; // size of comet head
    let angle = 0;

    function animateDot() {
      angle += 0.02;
      if (angle > 2 * Math.PI) angle -= 2 * Math.PI;

      // Calculate position of the comet head on the circular orbit
      const x = centerX + radius * Math.cos(angle) - dotRadius / 2;
      const y = centerY + radius * Math.sin(angle) - dotRadius / 2;

      // Increment hue for rainbow effect
      hueRef.current = (hueRef.current + 2) % 360;
      const color = `hsl(${hueRef.current}, 100%, 50%)`;

      setDotStyle({
        left: x,
        top: y,
        backgroundColor: color,
      });

      requestAnimationFrame(animateDot);
    }

    animateDot();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function hexToRgb(hex) {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
            result[3],
            16
          )}`
        : "255, 255, 255";
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];

    function createStars(count) {
      const starsArray = [];
      for (let i = 0; i < count; i++) {
        starsArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          baseAlpha: Math.random() * 0.5 + 0.3,
          alpha: 0,
          alphaDirection: 1,
        });
      }
      return starsArray;
    }

    stars = createStars(150);

    function drawStars() {
      stars.forEach((star) => {
        star.alpha += 0.01 * star.alphaDirection;
        if (star.alpha >= star.baseAlpha) star.alphaDirection = -1;
        if (star.alpha <= 0) star.alphaDirection = 1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha.toFixed(2)})`;
        ctx.fill();
      });
    }

    let comets = [];
    let circles = [];

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

    function createCircle(x, y) {
      const colors = [
        "#22d3ee",
        "#3b82f6",
        "#10b981",
        "#f97316",
        "#8b5cf6",
        "#ec4899",
        "#facc15",
      ];
      return {
        x,
        y,
        radius: 0,
        maxRadius: 50 + Math.random() * 30,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    }

    function drawCircle(c) {
      const gradient = ctx.createRadialGradient(
        c.x,
        c.y,
        c.radius * 0.1,
        c.x,
        c.y,
        c.radius
      );
      gradient.addColorStop(0, `rgba(${hexToRgb(c.color)}, ${c.alpha})`);
      gradient.addColorStop(1, `rgba(${hexToRgb(c.color)}, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawStars();

      if (Math.random() < 0.02) comets.push(createComet());

      comets.forEach((comet, index) => {
        comet.x += comet.speed * Math.cos(comet.angle);
        comet.y += comet.speed * Math.sin(comet.angle);
        comet.alpha -= 0.005;

        if (comet.alpha <= 0) comets.splice(index, 1);
        else drawComet(comet);
      });

      circles.forEach((circle, index) => {
        circle.radius += 1.5;
        circle.alpha -= 0.02;

        if (circle.alpha <= 0) circles.splice(index, 1);
        else drawCircle(circle);
      });

      requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      circles.push(createCircle(e.clientX, e.clientY));
    }

    window.addEventListener("mousemove", handleMouseMove);

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = createStars(150);
    }
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Inline styles for comet tail */}
      <style>{`
        .spinning-comet {
          position: absolute;
          border-radius: 50%;
          filter: blur(1.5px);
          box-shadow: 0 0 10px 5px currentColor;
          pointer-events: none;
        }
        .spinning-comet::before {
          content: "";
          position: absolute;
          left: -30px;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 10px;
          background: linear-gradient(
            to left,
            rgba(255 255 255 / 0.8),
            rgba(255 255 255 / 0)
          );
          border-radius: 50%;
          filter: blur(2px);
          opacity: 0.6;
          pointer-events: none;
        }
      `}</style>

      <section id="home" className="home-section">
        <canvas ref={canvasRef} className="comet-canvas" />
        <div className="home-container">
          <div className="home-content">
            <div
              className="profile-pic"
              ref={profileRef}
              style={{ position: "relative", width: 200, height: 200 }}
            >
              <img
                src={profilePic}
                alt="Dilshan Senanayaka"
                style={{ borderRadius: "50%", width: "100%", height: "100%" }}
              />
              {/* Spinning comet */}
              <span
                className="spinning-comet"
                style={{
                  left: dotStyle.left,
                  top: dotStyle.top,
                  backgroundColor: dotStyle.backgroundColor,
                  color: dotStyle.backgroundColor, // for box-shadow and tail
                  width: 16,
                  height: 16,
                }}
              />
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
    </>
  );
}
