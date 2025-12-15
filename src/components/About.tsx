const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-hero">
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">About Me</h2>
          <p className="about-hero-text">
            A detail-oriented and enthusiastic <span className="highlight">Junior Software Developer</span> based in{' '}
            <span className="highlight">Colombo, Sri Lanka</span>, combining clean engineering practices with a love for
            teaching to build impactful digital experiences.
          </p>
        </div>

        <div className="about-metrics">
          <div className="about-metric-card">
            <div className="about-metric-icon about-metric-icon-blue">
              <span>🚀</span>
            </div>
            <div className="about-metric-content">
              <p className="about-metric-value">20+</p>
              <p className="about-metric-label">Projects completed</p>
            </div>
          </div>

          <div className="about-metric-card">
            <div className="about-metric-icon about-metric-icon-purple">
              <span>💻</span>
            </div>
            <div className="about-metric-content">
              <p className="about-metric-value">15+</p>
              <p className="about-metric-label">Technologies mastered</p>
            </div>
          </div>

          <div className="about-metric-card">
            <div className="about-metric-icon about-metric-icon-pink">
              <span>🎓</span>
            </div>
            <div className="about-metric-content">
              <p className="about-metric-value">2+</p>
              <p className="about-metric-label">Years of experience</p>
            </div>
          </div>
        </div>

        <div className="about-summary">
          <p>
            I&apos;m currently working as a <span className="highlight">Junior Software Developer</span> at{' '}
            <span className="highlight">M Data Zone SA Pvt Ltd</span>, where I build full-stack solutions with modern
            tools like Next.js, Payload CMS, Laravel, PHP, and MySQL.
          </p>
          <p>
            Previously, I contributed as a <span className="highlight">Software Engineering Intern</span> at the{' '}
            <span className="highlight">Sri Lanka Export Development Board</span>, helping deliver Laravel-based
            platforms and a React Native CRM app used by real teams.
          </p>
          <p>
            I hold a <span className="highlight">BICT (Hons) degree in Software Technology</span> from the{' '}
            <span className="highlight">University of Sri Jayewardenepura</span>, with a strong interest in backend
            engineering, data-focused systems, and sharing knowledge through teaching.
          </p>
        </div>

        <div className="about-skills">
          <h3 className="about-skills-title">Core Skills</h3>
          <div className="about-skills-tags">
            <span className="tag">Web development</span>
            <span className="tag">Frontend engineering</span>
            <span className="tag">Clean architecture</span>
            <span className="tag">Database design</span>
            <span className="tag">Teaching & mentoring</span>
            <span className="tag">Problem solving</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
