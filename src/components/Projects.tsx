import { useState } from 'react';
import projectPlaceholder from '../assets/react.svg';

const Projects = () => {
  const categories = ['All', 'Web Dev', 'Plugins', 'E‑commerce', 'Other'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'Business Website Development',
      category: 'Web Dev',
      role: 'Full-stack development',
      image: projectPlaceholder,
      technologies: ['Next.js', 'Payload CMS', 'JWT', 'REST APIs'],
      tools: ['VS Code', 'GitHub', 'Postman'],
      summary:
        'Responsive business website built with Next.js and Payload CMS, including advanced authentication and SEO optimization.',
    },
    {
      title: 'Custom WordPress Plugin Development',
      category: 'Plugins',
      role: 'Backend & plugin engineering',
      image: projectPlaceholder,
      technologies: ['WordPress', 'PHP'],
      tools: ['PHPStorm / VS Code', 'Git', 'WordPress Toolkit'],
      summary:
        'Modular WordPress plugin that refactors legacy business logic into clean, reusable components with better performance and security.',
    },
    {
      title: 'E‑commerce Website Development',
      category: 'E‑commerce',
      role: 'Storefront & plugin customization',
      image: projectPlaceholder,
      technologies: ['WordPress', 'WooCommerce', 'Elementor', 'TypeScript'],
      tools: ['WooCommerce', 'Elementor', 'Custom plugins'],
      summary:
        'Tailored e‑commerce experience with custom plugins, checkout customization, and UI improvements for higher conversion and trust.',
    },
    {
      title: 'Patisserie‑Rolland',
      category: 'Other',
      role: 'Feature implementation & maintenance',
      image: projectPlaceholder,
      technologies: ['WordPress', 'PHP'],
      tools: ['GoLivro integration', 'Custom admin plugins'],
      summary:
        'Enhancements for a production WordPress site, including delivery service integration, theme translation, and admin panel extensions.',
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Projects</h2>
          <p className="projects-subtitle">
            A curated selection of real-world work across web apps, plugins, and e‑commerce solutions.
          </p>

          <div className="projects-tabs">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`projects-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          {filteredProjects.map((project, idx) => (
            <article key={idx} className="project-card">
              <header className="project-card-header">
                <h3 className="project-card-title">{project.title}</h3>
                <span className="project-card-role">{project.role}</span>
              </header>

              {project.image && (
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}

              <div className="project-card-body">
                <p className="project-card-summary">{project.summary}</p>

                <div className="project-card-meta">
                  <div className="project-card-meta-block">
                    <p className="project-card-meta-label">Technologies</p>
                    <div className="project-card-chips">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="project-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="project-card-meta-block">
                    <p className="project-card-meta-label">Tools</p>
                    <div className="project-card-chips">
                      {project.tools.map((tool) => (
                        <span key={tool} className="project-chip project-chip-alt">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <footer className="project-card-footer">
                <button type="button" className="project-card-button">
                  View Project
                </button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
