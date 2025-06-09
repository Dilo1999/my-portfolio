import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { Element, scroller } from "react-scroll";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    scroller.scrollTo(path, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToSection />
      <main>
        <Element name="home">
          <section id="home">
            <Home />
          </section>
        </Element>
        <Element name="about">
          <section id="about">
            <About />
          </section>
        </Element>
        <Element name="projects">
          <section id="projects">
            <Projects />
          </section>
        </Element>
        <Element name="contact">
          <section id="contact">
            <Contact />
          </section>
        </Element>
      </main>
      <Footer />
    </Router>
  );
}
