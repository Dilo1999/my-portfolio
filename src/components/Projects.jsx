import React from "react";

const projects = [
  {
    id: 1,
    title: "University LMS App",
    description:
      "An Android app integrated with Firebase for managing course feedback, including authentication, submissions, and responses.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 2,
    title: "Greenhouse Automation App",
    description:
      "Android app using ML and Firebase for real-time greenhouse automation and IoT device control.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 3,
    title: "CRM Mobile App",
    description:
      "React Native app replicating web-based CRM systems with user authentication and CRM tools.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 4,
    title: "Face Recognition Attendance System",
    description:
      "Python app using SVM for automated face recognition and attendance tracking.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 5,
    title: "Sprinkles Bakery Android App",
    description:
      "Android app built with Firebase for managing orders and customer records for a bakery.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 6,
    title: "Milk Shop Management System",
    description:
      "Java & MySQL-based Android app for dairy inventory, sales, and customer management.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 7,
    title: "Paradise Hotel Web",
    description:
      "A responsive React website with routing, service pages, contact form, map, and dynamic components.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 8,
    title: "Grocery Shop App",
    description:
      "Flutter mobile app with login, product categories, promotions, cart, and order management.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 9,
    title: "To-Do List App",
    description:
      "React + Node.js + MongoDB app to manage tasks, including images, due dates, and a REST API backend.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 10,
    title: "E-commerce Shopping App",
    description:
      "React-based store with cart, search, filtering, and FakeStore API integration using Axios and React Router.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 11,
    title: "Contact Management Web App",
    description:
      "Full-stack app using React, Node.js, MySQL for CRUD operations on contacts, image upload, and responsive UI.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 12,
    title: "Sri Lanka Bus Routes WebApp",
    description:
      "React-based app for real-time Sri Lankan bus route info via REST API, with a clean UI.",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="project-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ id, title, description, demoLink, codeLink }) => (
          <div key={id} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
              <a href={demoLink} target="_blank" rel="noreferrer">
                View more
              </a>
              <a href={codeLink} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
