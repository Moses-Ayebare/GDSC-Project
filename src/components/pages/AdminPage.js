import React from "react";
import "./AdminPage.css";

export default function AdminPage() {
  return (
    <div className="admin-container">
      <h1>Welcome to the Admin Page</h1>
      <p>This page is only accessible to users with admin privileges.</p>
      <ul>
        <li>List of all users</li>
        <li>Option to delete users</li>
        <li>Option to add new users</li>
      </ul>
    </div>
  );
}
