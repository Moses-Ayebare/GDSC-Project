import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

export default function SignupPage(props) {
  // Set up state variables using useState hook
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});

  // Create a navigate object from the useNavigate hook provided by react-router-dom
  const navigate = useNavigate();

  // Event handler functions for form inputs
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleConfirmPassChange = (e) => {
    setConfirmPass(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior

    // Validate the form
    let formErrors = {};
    if (!name) {
      formErrors.name = "Please enter your full name";
    }
    if (!email) {
      formErrors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (!pass || pass.length < 8) {
      formErrors.pass = "Please enter a password with at least 8 characters";
    }
    if (pass !== confirmPass) {
      formErrors.confirmPass = "Passwords do not match. Please try again.";
    }
    if (!role) {
      formErrors.role = "Please select a role";
    }

    // Set the form errors
    setErrors(formErrors);

    // If there are errors, stop the submission
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    // If there are no errors, create user information object
    const userInfo = { email, pass, name, confirmPass, role };

    // Retrieve the list of existing users from localStorage, or initialize as an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user with this email already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert(
        "This email is already registered. Please use a different email or login."
      );
      return;
    }

    // If user doesn't already exist, add user to the list and store in localStorage
    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));

    // If user is an admin, navigate to admin page
    if (role === "admin") {
      navigate("/admin");
    } else {
      // Show prompt with user information and option to go to login page
      const message = `Welcome ${name}! You have successfully signed up with email ${email} and role ${role}.`;
      if (window.confirm(`${message}Click OK to go to the login page.Or click cancel to stay on this page.`)) {
// Navigate to login page
navigate("/login");
}
}
};

return (

  <div className="signup-page">
    <h2>Sign up</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={pass}
          onChange={handlePassChange}
        />
        {errors.pass && <span className="error">{errors.pass}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPass}
          onChange={handleConfirmPassChange}
        />
        {errors.confirmPass && (
          <span className="error">{errors.confirmPass}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select id="role" value={role} onChange={handleRoleChange}>
          <option value="">--Please select a role--</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        {errors.role && <span className="error">{errors.role}</span>}
      </div>
      <button type="submit">Sign up</button>
    </form>
  </div>
);
}