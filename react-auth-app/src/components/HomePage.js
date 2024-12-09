import React from "react";

const HomePage = ({ user }) => {
  return (
    <div style={homepageStyles}>
      <h1>Hello, {user}!</h1>
      <p>Welcome to the homepage. You are successfully logged in.</p>
    </div>
  );
};

const homepageStyles = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "100%",
  maxWidth: "400px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

export default HomePage;
