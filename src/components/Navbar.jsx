import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = [
    { id: 1, to: "home", label: "Home" },
    { id: 2, to: "about", label: "About" },
    { id: 3, to: "projects", label: "Projects" },
    { id: 4, to: "contact", label: "Contact" },
  ];

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">MyPortfolio</div>

        <ul className={navOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map(({ id, to, label }) => (
            <li key={id}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active"
                onClick={() => setNavOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="menu-icon" onClick={toggleNav}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </nav>
  );
}
