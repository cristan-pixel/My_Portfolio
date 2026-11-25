export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo">
          <span className="logo-chip"></span> C.ARAÑEZ
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Projects</a>
          <a href="#experience">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
