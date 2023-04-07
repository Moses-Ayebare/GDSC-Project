import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage(props) {
  // Declare state variables for email and password
  const [email, getEmail] = useState("");
  const [pass, getPass] = useState("");

  // Update state variables when user types in email and password fields
  const handleEmailChange = (e) => {
    getEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    getPass(e.target.value);
  };

  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  // Handle form submission when user clicks "Log In" button
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from local storage and check if there are any
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users || users.length === 0) {
      alert("No users registered yet. Please register first.");
      return;
    }

    // Find the user with the matching email and password
    const userInfo = users.find(
      (user) => user.email === email && user.pass === pass
    );
    if (!userInfo) {
      alert("Incorrect email or password. Please try again.");
      return;
    }

    // Check if the user has admin privileges
    if (userInfo.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/dashboard", { state: { username: email } });
    }
  };

  // Render the login form and a link to the signup page
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="Your Email"
        />

        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={handlePassChange}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>

      <button className="link-btn" onClick={() => navigate("/signup")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
}
