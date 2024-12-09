import React from "react";

const Navbar = ({ setForm }) => {
  return (
    <nav style={navbarStyles}>
      <ul style={navListStyles}>
        <li style={navItemStyles}>
          <button
            style={buttonStyles}
            onClick={() => setForm("login")}
          >
            Login
          </button>
        </li>
        <li style={navItemStyles}>
          <button
            style={buttonStyles}
            onClick={() => setForm("signup")}
          >
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Simple inline styles for the navbar
const navbarStyles = {
  backgroundColor: "#333",
  padding: "10px 20px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const navListStyles = {
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  padding: "0",
  margin: "0",
};

const navItemStyles = {
  margin: "0 15px",
};

const buttonStyles = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "5px",
  fontSize: "16px",
  transition: "background-color 0.3s",
};

export default Navbar;
