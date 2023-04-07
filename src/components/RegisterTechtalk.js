import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages/SignupPage.css";


export default function RegisterTechtalk(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  // const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

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

  // const handleRoleChange = (e) => {
  //   setRole(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    // if (!role) {
    //   formErrors.role = "Please select a role";
    // }

    // Set the form errors
    setErrors(formErrors);

    // If there are errors, stop the submission
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    const userInfo = { email, pass, name, confirmPass};
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert(
        "This email is already registered. Please use a different email or login."
      );
      return;
    }

    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));

    // Show prompt with user information and option to go to login page
    const message = `Welcome ${name}! You have successfully signed up with email ${email}.`;
    if (window.confirm(`${message} Click OK to get more info.`)) {
      navigate("/");
    }
  };

  return (
 
    <div className="auth-form-container">
      <span style={{color:"purple"}}><h1>AI TechTalk Registration</h1></span>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          onChange={handleNameChange}
          name="name"
          id="name"
          placeholder="full name"
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="youremail@example.com"
          name="email"
          id="email"
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={handlePassChange}
          type="password"
          placeholder="password"
          name="password"
          id="password"
        />
        {errors.pass && <div className="error">{errors.pass}</div>}

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          value={confirmPass}
          onChange={handleConfirmPassChange}
          type="password"
          placeholder="confirm password"
          name="confirm-password"
          id="confirm-password"
        />
        {errors.confirmPass && (
          <div className="error">{errors.confirmPass}</div>
        )}

        {/* <label htmlFor="role">Role</label>
        <select value={role} onChange={handleRoleChange} name="role" id="role">
          <option value="">-- Select a role --</option>
          <option value="user">Club Admin</option>
          <option value="admin">Club Member</option>
          <option value="admin">Club Lead</option>
        </select>
        {errors.role && <div className="error">{errors.role}</div>} */}

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}
