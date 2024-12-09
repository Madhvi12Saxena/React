import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Homepage from "./components/HomePage"; 
import "./style.css";

function App() {
  const [form, setForm] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Function to handle login success
  const handleLoginSuccess = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Navbar setForm={setForm} />
      <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        {isLoggedIn ? (
          <Homepage user={user} />
        ) : form === "login" ? (
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        ) : (
          <SignUpForm />
        )}
      </div>
    </div>
  );
}

export default App;
