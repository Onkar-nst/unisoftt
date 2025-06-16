import React, { useState } from "react";

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Raleway:wght@500&display=swap');

  .logo-font {
    font-family: 'Lobster', cursive;
  }

  .nav-font {
    font-family: 'Raleway', sans-serif;
  }
`;

function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    "Home",
    "About",
    "Courses",
    "Learning",
    "Certifications",
    "Contact",
  ];

  return (
    <div style={containerStyle}>
      <style>{fontStyles}</style>

      <nav style={styles}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* yaha par image tag laga lo  */}
          <h4 className="logo-font" style={{ margin: 0, color: "#ffffff" }}>
            Unisoft
          </h4>
        </div>

        <ul style={listStyle}>
          {menuItems.map((label, index) => (
            <li
              key={label}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={`#${label.toLowerCase()}`}
                className="nav-font"
                style={{
                  ...linkStyle,
                  color: hoveredIndex === index ? "#26f05d" : "#92f7ae", // darker on hover
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

// Center the nav inside the viewport
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  position: "absolute",
  top: "0px",
  zIndex: 25,
};

// Glassy Navbar style
const styles = {
  height: "70px",
  width: "calc(100vw - 80px)", // fixed overflow issue
  color: "#f5f5f5",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(6px)",
  borderRadius: "15px",
  padding: "0 40px",
  marginTop: "20px",
  boxSizing: "border-box",
};

// Menu list styles
const listStyle = {
  listStyle: "none",
  display: "flex",
  gap: "35px",
  margin: 0,
  padding: 0,
};

// Basic link styles
const linkStyle = {
  color: "#7afa9d",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "17px",
  transition: "color 0.3s ease",
};

export default Navbar;
