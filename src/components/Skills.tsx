const Skills = () => {
  const technicalSkills = {
    'Programming & Scripting': [
      'JavaScript',
      'TypeScript',
      'PHP',
      'Python',
      'Java',
      'Dart (Flutter)',
    ],
    'Web Development': [
      'Next.js',
      'React.js',
      'Laravel',
      'WordPress',
      'WooCommerce',
      'Elementor',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
    'Mobile App Development': ['React Native', 'Android Studio (Java/Kotlin)'],
    'Databases & Backend': ['MySQL', 'Firebase', 'Payload CMS', 'API development & integration'],
    'Authentication & Security': [
      'JWT (Bearer & Self-signed)',
      'Refresh Tokens',
      'OTP-based auth',
      'API Tokens',
    ],
    'DevOps & Tools': ['Git', 'GitHub', 'VS Code', 'Postman'],
  };

  const softSkills = [
    'Problem Solving & Analytical Thinking',
    'Attention to Detail & Quality Focus',
    'Time Management & Meeting Deadlines',
    'Team Collaboration & Communication',
    'Adaptability & Learning New Technologies Quickly',
    'Critical Thinking & Decision Making',
    'Creativity & Innovation in Solution Design',
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">
          Skills
        </h2>

        {/* Technical Skills */}
        <div className="skills-container">
          <h3 className="skills-section-title">
            Technical Skills
          </h3>
          <div className="skills-grid">
            {Object.entries(technicalSkills).map(([category, skills], idx) => (
              <div key={idx} className="skill-category">
                <h4 className="skill-category-title">{category}</h4>
                <div className="skill-tags">
                  {skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="soft-skills-container">
          <h3 className="skills-section-title">Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="soft-skill-item">
                <span className="soft-skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
