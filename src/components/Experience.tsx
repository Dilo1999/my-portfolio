const Experience = () => {
  const experiences = [
    {
      title: 'Junior Software Developer',
      company: 'M Data Zone SA Pvt Ltd',
      period: 'Current',
      projects: [
        {
          name: 'Business Website Development',
          tech: 'Next.js + Payload CMS',
          description: [
            'Developed a fully responsive business website using Next.js with pixel-perfect UI based on provided designs.',
            'Built secure backend communication using Payload CMS and custom API endpoints.',
            'Implemented a complete authentication system including JWT (bearer & self-signed tokens), refresh tokens, federated tokens, OTP-based auth, and API tokens.',
            'Ensured optimized performance, SEO, and clean modular code following industry best practices.',
          ],
        },
        {
          name: 'Custom WordPress Backend Logic',
          tech: 'PHP Plugin Development',
          description: [
            'Refactored complex backend logic into a custom WordPress plugin using PHP.',
            'Improved maintainability and reusability by modularizing business logic.',
            'Enhanced performance, security, and ensured compatibility with WordPress standards.',
          ],
        },
        {
          name: 'E-commerce Website Development',
          tech: 'WordPress + WooCommerce + Elementor',
          description: [
            'Built an e-commerce website using WordPress, customizing WooCommerce and Elementor for client requirements.',
            'Developed and extended website functionality via two custom plugins using TypeScript, PHP, and JavaScript.',
            'Integrated product management, checkout customization, and UI enhancements for a seamless user experience.',
          ],
        },
      ],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Sri Lanka Export Development Board',
      period: 'Previous',
      projects: [
        {
          name: 'Website Enhancements',
          tech: 'Laravel (actionplan.edb.gov.lk)',
          description: [
            'Added new features to the website using Laravel, managing both backend and frontend development.',
            'Updated and improved user account management functionalities.',
          ],
        },
        {
          name: 'Mobile App Development',
          tech: 'React Native (crm.edb.gov.lk)',
          description: [
            'Developed a React Native mobile application replicating the CRM system\'s web functionality.',
            'Integrated all core CRM features to ensure seamless cross-platform experience.',
          ],
        },
        {
          name: 'Website Development',
          tech: 'Laravel (wed.edb.gov.lk)',
          description: [
            'Designed and developed a Laravel-based website with a user-friendly interface for EDB staff.',
            'Implemented backend functionalities for secure user management and access control.',
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">
          Professional Experience
        </h2>
        <div className="experience-container">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">
                    {exp.title}
                  </h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">
                  {exp.period}
                </span>
              </div>
              <div className="experience-projects">
                {exp.projects.map((project, pIdx) => (
                  <div key={pIdx} className="experience-project">
                    <div className="project-header">
                      <h4 className="project-name">{project.name}</h4>
                      <span className="project-tech">
                        {project.tech}
                      </span>
                    </div>
                    <ul className="project-description">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
