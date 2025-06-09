import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { id: 1, to: "/", label: "Home" },
    { id: 2, to: "/about", label: "About" },
    { id: 3, to: "/projects", label: "Projects" },
    { id: 4, to: "/contact", label: "Contact" },
  ];

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  return (
    <nav className="modern-nav">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" onClick={closeNav}>
            <span>🚀 MyPortfolio</span>
          </Link>
        </div>

        <ul className={navOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map(({ id, to, label }) => (
            <li key={id}>
              <Link
                to={to}
                onClick={closeNav}
                className={location.pathname === to ? "active" : ""}
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
