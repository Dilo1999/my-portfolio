import React from "react";

const projects = [
  {
    id: 1,
    title: "University LMS Mobile App",
    description:
      "An Android app integrated with Firebase for managing course feedback, including authentication, submissions, and responses.",
    image: "https://elearningindustry.com/wp-content/uploads/2020/08/why-universities-should-use-an-lms.jpg",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["public/android.png", "src/assets/icons/firebase.png", "src/assets/icons/java.png"],
  },
  {
    id: 2,
    title: "Greenhouse Automation Mobile App",
    description:
      "Android app using ML and Firebase for real-time greenhouse automation and IoT device control.",
    image: "https://i.ytimg.com/vi/j8CbyzdwVQE/maxresdefault.jpg",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/android.png", "src/assets/icons/firebase.png", "src/assets/icons/python.png", "src/assets/icons/iot.png"],
  },
  {
    id: 3,
    title: "CRM Mobile App",
    description:
      "React Native app replicating web-based CRM systems with user authentication and CRM tools.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQEFF5B0jnVEOg/feedshare-shrink_800/feedshare-shrink_800/0/1724135969643?e=1751500800&v=beta&t=ERFJFIt8zMwQhTyYiw2G5L82Vd_X7_YJEpF5H4njO6g",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/react.png", "src/assets/icons/nodejs.png", "src/assets/icons/mysql.png"],
  },
  {
    id: 4,
    title: "Face Recognition Attendance System",
    description:
      "Python app using SVM for automated face recognition and attendance tracking.",
    image: "https://i.ytimg.com/vi/A6464U4bPPQ/maxresdefault.jpg",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/python.png", "src/assets/icons/opencv.png", "src/assets/icons/ml.png"],
  },
  {
    id: 5,
    title: "Sprinkles Bakery Android Mobile App",
    description:
      "Android app built with Firebase for managing orders and customer records for a bakery.",
    image: "https://play-lh.googleusercontent.com/1hfWsfOuvNEG-trlr7aioF69iW-lj5bqVe1pcg9znyejxpLN53xQvI8A9Gt3ylvDAQ",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/android.png", "src/assets/icons/firebase.png"],
  },
  {
    id: 6,
    title: "Milk Shop Management System Mobile App",
    description:
      "Java & MySQL-based Android app for dairy inventory, sales, and customer management.",
    image: "https://www.simpledairy.com/images/app/sd_customer.webp",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/java.png", "src/assets/icons/mysql.png", "src/assets/icons/android.png"],
  },
  {
    id: 7,
    title: "Paradise Hotel Web App",
    description:
      "A responsive React website with routing, service pages, contact form, map, and dynamic components.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGij2-M4Smsiw/feedshare-shrink_1280/B56Za.WYjcGoAk-/0/1746950262238?e=1751500800&v=beta&t=TlE72UGegs0rNVZag1xc1DEXvRRAA5uGxRlCHHFaA2c",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/react.png", "src/assets/icons/css3.png", "src/assets/icons/nodejs.png"],
  },
  {
    id: 8,
    title: "Grocery Shop App",
    description:
      "Flutter mobile app with login, product categories, promotions, cart, and order management.",
    image: "https://cdn.kodytechnolab.com/wp-content/uploads/2021/10/grocery-app-6-1.jpg",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/flutter.png", "src/assets/icons/firebase.png"],
  },
  {
    id: 9,
    title: "To-Do List App",
    description:
      "React + Node.js + MongoDB app to manage tasks, including images, due dates, and a REST API backend.",
    image: "https://www.sketchappsources.com/resources/source-image/to-do-app-farianzum.png",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/react.png", "src/assets/icons/nodejs.png", "src/assets/icons/mongodb.png"],
  },
  {
    id: 10,
    title: "E-commerce Shopping Mobile App",
    description:
      "React-based store with cart, search, filtering, and FakeStore API integration using Axios and React Router.",
    image: "https://cdn.dribbble.com/userupload/17496099/file/original-06a327465e373fa7d35ef9a86028900c.jpg?resize=752x&vertical=center",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/react.png", "src/assets/icons/axios.png", "src/assets/icons/api.png"],
  },
  {
    id: 11,
    title: "Contact Management Web App",
    description:
      "Full-stack app using React, Node.js, MySQL for CRUD operations on contacts, image upload, and responsive UI.",
    image: "https://www.pipelinersales.com/wp-content/uploads/2023/09/what-is-crm-collage-contact-management-software-01-1740.jpg",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/react.png", "src/assets/icons/nodejs.png", "src/assets/icons/mysql.png"],
  },
  {
    id: 12,
    title: "Sri Lanka Bus Routes WebApp",
    description:
      "React-based app for real-time Sri Lankan bus route info via REST API, with a clean UI.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8SBkQ5nP_z0WoSGJvgdow3HYRmdN2C8mlg&s",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/react.png", "src/assets/icons/api.png"],
  },
  {
    id: 13,
    title: "Hostel Management System Mobile App",
    description:
      "📱 Revolutionizing Hostel Management with QR Code Technology! Excited to share my Hostel Management System App developed using Android Studio and Firebase.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQErEPBbFapcfA/feedshare-shrink_1280/feedshare-shrink_1280/0/1732804287553?e=1751500800&v=beta&t=58OubZmZftNTxvtqZS2-f0qVi4bfDTS0uCtgxpch3j4",
    demoLink: "#",
    codeLink: "https://github.com/Dilo1999",
    techIcons: ["src/assets/icons/android.png", "src/assets/icons/firebase.png", "src/assets/icons/qrcode.png"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="project-heading">A Small Selection Of My Recent Projects</h2>
      <div className="projects-grid">
        {projects.map(({ id, title, description, image, demoLink, codeLink, techIcons }) => (
          <div key={id} className="project-card">
            <img src={image} alt={title} className="project-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tech-icons">
              {techIcons.map((icon, index) => (
                <img key={index} src={icon} alt="tech" className="tech-icon" />
              ))}
            </div>
            <div className="project-links">
              <a href={demoLink} target="_blank" rel="noreferrer">View more</a>
              <a href={codeLink} target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
