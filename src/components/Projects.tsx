const Projects = () => {
  const projects = [
    {
      title: 'Business Website Development',
      tech: 'Next.js + Payload CMS',
      description: [
        'Developed a fully responsive business website with pixel-perfect UI based on provided designs.',
        'Built secure backend communication using Payload CMS and custom API endpoints.',
        'Implemented authentication system: JWT (bearer & self-signed tokens), refresh tokens, federated tokens, OTP-based auth, and API tokens.',
        'Optimized performance, SEO, and ensured clean modular code.',
      ],
    },
    {
      title: 'Custom WordPress Plugin Development',
      tech: 'PHP',
      description: [
        'Refactored complex backend logic into a modular custom WordPress plugin.',
        'Enhanced maintainability, performance, and security in line with WordPress standards.',
      ],
    },
    {
      title: 'E-commerce Website Development',
      tech: 'WordPress + WooCommerce + Elementor',
      description: [
        'Built a customized e-commerce website using WordPress, WooCommerce, and Elementor.',
        'Developed two custom plugins using TypeScript, PHP, and JavaScript.',
        'Integrated product management, checkout customization, and UI enhancements.',
      ],
    },
    {
      title: 'Patisserie-Rolland',
      tech: 'WordPress | PHP',
      description: [
        'Implementing GoLivro for delivery services as a custom plugin.',
        'Changing Theme Translation using Pod File.',
        'Making content changes for the website.',
        'Admin panel custom plugin functionalities.',
      ],
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">
          Projects
        </h2>
        <div className="projects-container">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-card-header">
                <h3 className="project-card-title">{project.title}</h3>
              </div>
              <span className="project-card-tech">
                {project.tech}
              </span>
              <ul className="project-card-description">
                {project.description.map((item, dIdx) => (
                  <li key={dIdx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
