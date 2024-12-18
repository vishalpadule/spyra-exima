import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css"; // Importing the CSS file

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username/email and password match
    if (credentials.username === "pushkar" && credentials.password === "pushkar3011") {
      // Store login state and username/email in localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", credentials.username);
      navigate("/dashboard"); // Navigate to the Dashboard after successful login
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    
    <div className="login-container d-flex justify-content-center mb-5 align-items-center">
      <form className="login-form px-4" onSubmit={handleSubmit}>
        <h2 className="login-title mb-4">Login</h2>
        <input
          type="text"
          name="Mail or username"
          placeholder="Mail or username"
          value={credentials.username}
          onChange={handleChange}
          className="form-control login-input my-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="form-control login-input"
        />
        <button type="submit" className="btn text-white mt-3 w-25 border" id="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
