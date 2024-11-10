"use client"
import { useState } from "react";
import "../style/header.css";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="parentdiv">
      {/* Website name */}
      <div className="website-name">
        <h1 className="main-heading">
          Prime<span className="bold-text">Resumes</span>
        </h1>
      </div>

      {/* Mobile menu icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Menu links */}
      <div className={`menu-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link href="./">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/project">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
