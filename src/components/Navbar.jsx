import { NavLink } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-accent">A.</span>
          <span className="logo-text">Chen</span>
        </NavLink>

        <button
          className="mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${isMobileOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setIsMobileOpen(false)}
          >
            Homepage
          </NavLink>
          <NavLink
            to="/background"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setIsMobileOpen(false)}
          >
            Background
          </NavLink>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link cv-link"
            onClick={() => setIsMobileOpen(false)}
          >
            <FileText size={16} />
            CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
