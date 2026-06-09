function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="logo">
        <span className="logo-dot"></span>
        <span className="logo-first">Nimasha</span>
        <span className="logo-last">Savindi</span>
      </a>

    <ul className="nav-links">
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