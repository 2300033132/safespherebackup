import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isScrolled ? "0.7rem 5vw" : "1rem 5vw",
    background: isScrolled
      ? "rgba(15, 23, 42, 0.85)" // translucent dark blue-gray
      : "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #1e3a5f 100%)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(56, 189, 248, 0.2)", // subtle cyan line
    color: "white",
    fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
    fontWeight: "600",
    flexWrap: "wrap",
    boxShadow: isScrolled ? "0 2px 15px rgba(0,0,0,0.3)" : "none",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#67e8f9", // soft cyan
    textShadow: "0 0 10px rgba(56, 189, 248, 0.4)",
    letterSpacing: "0.5px",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
  };

  const linkStyle = {
    color: "#f1f5f9",
    textDecoration: "none",
    transition: "color 0.3s ease, transform 0.2s ease",
    position: "relative",
    padding: "0.5rem 0",
  };

  const loginBtnStyle = {
    background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
    color: "white",
    padding: "0.6rem 1.5rem",
    borderRadius: "30px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "clamp(0.9rem, 1vw, 1rem)",
    transition: "all 0.3s ease",
    border: "none",
    boxShadow: "0 0 10px rgba(56, 189, 248, 0.3)",
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <i className="fas fa-shield-alt"></i>
        SafeSphere
      </div>

      <div style={navLinksStyle}>
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/services", label: "Services" },
          { to: "/contact", label: "Contact" },
          { to: "/reports", label: "Reports" },
          { to: "/resources", label: "Resources" },
          { to: "/volunteer-dashboard", label: "Volunteers" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = "#67e8f9"; // light cyan
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#f1f5f9";
              e.target.style.transform = "translateY(0)";
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Link
        to="/login"
        style={loginBtnStyle}
        onMouseEnter={(e) => {
          e.target.style.background = "linear-gradient(90deg, #22d3ee, #60a5fa)";
          e.target.style.boxShadow = "0 0 15px rgba(56, 189, 248, 0.5)";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "linear-gradient(90deg, #06b6d4, #3b82f6)";
          e.target.style.boxShadow = "0 0 10px rgba(56, 189, 248, 0.3)";
          e.target.style.transform = "translateY(0)";
        }}
      >
        Log In
      </Link>
    </nav>
  );
}
