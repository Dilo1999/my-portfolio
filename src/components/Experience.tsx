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
            <>
              Delivered a fully responsive business website in{' '}
              <span className="highlight">Next.js</span>, translating design files into a polished, production-ready UI.
            </>,
            <>
              Integrated a secure, CMS-driven backend using <span className="highlight">Payload CMS</span> and custom
              API endpoints for flexible content management.
            </>,
            <>
              Implemented a comprehensive authentication layer with <span className="highlight">JWT</span> (bearer &
              self-signed tokens), refresh tokens, federated tokens, OTP-based flows, and API tokens.
            </>,
            'Optimized performance, SEO, and code structure to keep the codebase clean, modular, and easy to extend.',
          ],
        },
        {
          name: 'Custom WordPress Backend Logic',
          tech: 'PHP Plugin Development',
          description: [
            <>
              Rebuilt complex legacy logic as a dedicated <span className="highlight">WordPress</span> plugin written in{' '}
              <span className="highlight">PHP</span>.
            </>,
            'Modularized business rules to improve maintainability, reusability, and clarity for future developers.',
            'Improved performance and security while ensuring full compatibility with WordPress standards and workflows.',
          ],
        },
        {
          name: 'E-commerce Website Development',
          tech: 'WordPress + WooCommerce + Elementor',
          description: [
            <>
              Built a tailored e-commerce experience on <span className="highlight">WordPress</span> by customizing{' '}
              <span className="highlight">WooCommerce</span> and <span className="highlight">Elementor</span> to match
              specific client needs.
            </>,
            <>
              Extended core functionality with two custom plugins using <span className="highlight">TypeScript</span>,{' '}
              <span className="highlight">PHP</span>, and <span className="highlight">JavaScript</span>.
            </>,
            'Improved product management, checkout flow, and UI details to create a smoother and more trustworthy shopping experience.',
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
            <>
              Implemented new features for the <span className="highlight">Laravel</span>-based platform, working across
              both backend and frontend layers.
            </>,
            'Refined account management flows to make user onboarding and access control smoother for stakeholders.',
          ],
        },
        {
          name: 'Mobile App Development',
          tech: 'React Native (crm.edb.gov.lk)',
          description: [
            <>
              Developed a <span className="highlight">React Native</span> mobile application that brought the existing
              CRM web experience to mobile devices.
            </>,
            'Integrated core CRM features to provide a consistent, cross-platform experience for users in the field.',
          ],
        },
        {
          name: 'Website Development',
          tech: 'Laravel (wed.edb.gov.lk)',
          description: [
            <>
              Designed and developed a <span className="highlight">Laravel</span>-based website with a clean, intuitive
              interface tailored to EDB staff workflows.
            </>,
            'Implemented secure user management and role-based access control to protect sensitive data.',
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header experience-header">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Professional journey so far</h2>
          <p className="section-subtitle">
            From early internships to production-ready platforms, I&apos;ve helped design, build, and ship real-world
            software that solves meaningful problems for teams and businesses.
          </p>
        </div>

        <div className="experience-layout">
          <div className="experience-timeline">
            {experiences.map((exp, idx) => (
              <article key={idx} className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <h3 className="experience-role">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span
                    className={`experience-badge ${
                      exp.period === 'Current' ? 'experience-badge-current' : 'experience-badge-previous'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <div className="experience-meta">
                  <span className="experience-meta-dot" />
                  <span className="experience-meta-label">
                    {idx === 0 ? 'Most recent role' : 'Previous role'} · {exp.projects.length} key projects
                  </span>
                </div>

                <div className="experience-summary">
                  <p>
                    A selection of projects that highlight my impact, ownership, and ability to collaborate across the
                    stack—from elegant frontends to reliable backend services.
                  </p>
                </div>

                <div className="experience-projects">
                  {exp.projects.map((project, pIdx) => (
                    <div key={pIdx} className="experience-project">
                      <div className="experience-project-header">
                        <h4 className="experience-project-name">{project.name}</h4>
                        <span className="experience-project-tech">{project.tech}</span>
                      </div>
                      <ul className="experience-project-list">
                        {project.description.map((item, dIdx) => (
                          <li key={dIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="experience-tags">
                  {exp.projects.map((project, pIdx) => (
                    <span key={pIdx} className="tag">
                      {project.tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
