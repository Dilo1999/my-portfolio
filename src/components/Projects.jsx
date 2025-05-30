import React from "react";

const projects = [
  {
    id: 1,
    title: "University LMS App",
    description:
      "An Android app integrated with Firebase for managing course feedback, including authentication, submissions, and responses.",
    image: "https://elearningindustry.com/wp-content/uploads/2020/08/why-universities-should-use-an-lms.jpg",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 2,
    title: "Greenhouse Automation App",
    description:
      "Android app using ML and Firebase for real-time greenhouse automation and IoT device control.",
    image: "https://i.ytimg.com/vi/j8CbyzdwVQE/maxresdefault.jpg",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 3,
    title: "CRM Mobile App",
    description:
      "React Native app replicating web-based CRM systems with user authentication and CRM tools.",
    image: "https://vscrm.in/Front/images/slider-11.png",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 4,
    title: "Face Recognition Attendance System",
    description:
      "Python app using SVM for automated face recognition and attendance tracking.",
    image: "https://i.ytimg.com/vi/A6464U4bPPQ/maxresdefault.jpg",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 5,
    title: "Sprinkles Bakery Android App",
    description:
      "Android app built with Firebase for managing orders and customer records for a bakery.",
    image: "https://play-lh.googleusercontent.com/1hfWsfOuvNEG-trlr7aioF69iW-lj5bqVe1pcg9znyejxpLN53xQvI8A9Gt3ylvDAQ",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 6,
    title: "Milk Shop Management System",
    description:
      "Java & MySQL-based Android app for dairy inventory, sales, and customer management.",
    image: "https://i.ytimg.com/vi/3h0QI32JwtQ/maxresdefault.jpg",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 7,
    title: "Paradise Hotel Web",
    description:
      "A responsive React website with routing, service pages, contact form, map, and dynamic components.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGij2-M4Smsiw/feedshare-shrink_1280/B56Za.WYjcGoAk-/0/1746950262238?e=1751500800&v=beta&t=TlE72UGegs0rNVZag1xc1DEXvRRAA5uGxRlCHHFaA2c",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 8,
    title: "Grocery Shop App",
    description:
      "Flutter mobile app with login, product categories, promotions, cart, and order management.",
    image: "https://i.imgur.com/1N3z1ZQ.png",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 9,
    title: "To-Do List App",
    description:
      "React + Node.js + MongoDB app to manage tasks, including images, due dates, and a REST API backend.",
    image: "https://i.imgur.com/7QpX9xU.png",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 10,
    title: "E-commerce Shopping App",
    description:
      "React-based store with cart, search, filtering, and FakeStore API integration using Axios and React Router.",
    image: "https://i.imgur.com/3G1z1ZQ.png",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 11,
    title: "Contact Management Web App",
    description:
      "Full-stack app using React, Node.js, MySQL for CRUD operations on contacts, image upload, and responsive UI.",
    image: "https://i.imgur.com/5QpX9xU.png",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
  {
    id: 12,
    title: "Sri Lanka Bus Routes WebApp",
    description:
      "React-based app for real-time Sri Lankan bus route info via REST API, with a clean UI.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8SBkQ5nP_z0WoSGJvgdow3HYRmdN2C8mlg&s",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="project-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ id, title, description, image, demoLink, codeLink }) => (
          <div key={id} className="project-card">
            <img src={image} alt={title} className="project-image" />
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
