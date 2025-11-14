import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 4vw",
        background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #1e3a5f 100%)",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "2rem",
        fontSize: "1rem",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(56, 189, 248, 0.2)",
      }}
    >
      {/* Logo + tagline */}
      <div style={{ flex: 1, minWidth: "240px" }}>
        <h3
          style={{
            margin: "0 0 0.6rem 0",
            fontSize: "1.4rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#67e8f9",
            textShadow: "0 0 8px rgba(56, 189, 248, 0.4)",
          }}
        >
          <span
            style={{
              background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
              borderRadius: "8px",
              width: "32px",
              height: "24px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              boxShadow: "0 0 8px rgba(56, 189, 248, 0.3)",
            }}
          >
            ⛑
          </span>
          SafeSphere
        </h3>
        <p
          style={{
            margin: 0,
            lineHeight: "1.5",
            color: "#cbd5e1",
            fontSize: "0.95rem",
          }}
        >
          Reducing disaster impact through technology & community resilience.
        </p>
      </div>

      {/* Quick Links */}
      <div style={{ flex: 1, minWidth: "180px" }}>
        <h4
          style={{
            margin: "0 0 0.6rem 0",
            fontSize: "1.1rem",
            color: "#67e8f9",
          }}
        >
          Quick Links
        </h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {["Home", "Reports", "Resources", "Volunteers"].map((item) => (
            <li key={item} style={{ marginBottom: "0.4rem" }}>
              <a
                href="#"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#67e8f9";
                  e.target.style.textShadow = "0 0 8px rgba(56,189,248,0.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#cbd5e1";
                  e.target.style.textShadow = "none";
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div style={{ flex: 1, minWidth: "220px" }}>
        <h4
          style={{
            margin: "0 0 0.6rem 0",
            fontSize: "1.1rem",
            color: "#67e8f9",
          }}
        >
          Contact
        </h4>
        <div style={{ lineHeight: "1.6" }}>
          <p style={{ margin: "0.2rem 0", color: "#cbd5e1", fontSize: "0.95rem" }}>
            ✉ support@safesphere.org
          </p>
          <p style={{ margin: "0.2rem 0", color: "#cbd5e1", fontSize: "0.95rem" }}>
            📞 +91 98765 43210
          </p>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid rgba(56, 189, 248, 0.2)",
          fontSize: "0.9rem",
          color: "#94a3b8",
        }}
      >
        © 2025 SafeSphere. All rights reserved.
      </div>
    </footer>
  );
}
