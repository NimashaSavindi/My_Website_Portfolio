import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <a href="#home" className="logo">
        NimashaSavindi
      </a>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li><a href="#home">About</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#education">Education</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#certifications">Certifications</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

    </nav>

  );
}

export default Navbar;