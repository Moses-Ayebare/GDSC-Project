import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import Navbar from "../Navbar";


function AdminPage() {
  const [members, setMembers] = useState([]);
  const [editingMemberId, setEditingMemberId] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    // Check if "members" key is in local storage
    const storedMembers = localStorage.getItem("members");
    if (storedMembers) {
      setMembers(JSON.parse(storedMembers));
    } else {
      fetch("/api/members")
        .then((response) => response.json())
        .then((data) => setMembers(data));
    }
  }, []);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedMembers = members.map((member) => {
      if (member.id === editingMemberId) {
        return { ...member, username, email, phoneNumber, role };
      }
      return member;
    });
    setMembers(updatedMembers);
    setEditingMemberId(null);
    setUsername("");
    setEmail("");
    setPhoneNumber("");
    setRole("");
    
    // Save updated members to local storage
    localStorage.setItem("members", JSON.stringify(updatedMembers));
  };
console.log(members)  

  const handleEdit = (member) => {
    setEditingMemberId(member.id);
    setUsername(member.username);
    setEmail(member.email);
    setPhoneNumber(member.phoneNumber);
    setRole(member.role);
  };

  const handleDelete = (member) => {
    fetch(`/api/members/${member.id}`, { method: "DELETE" }).then(() => {
      const updatedMembers = members.filter((m) => m.id !== member.id);
      setMembers(updatedMembers);
    });
  };

  return (
    <div className="admin-page">
      <Navbar />
      <h1 style={{fontFamily:"cursive",color:"white"}}>CLUB LEAD</h1>
      <h2 style={{fontFamily:"cursive",color:"white"}}>Club Members</h2>
      <table>
        <thead>
          <tr>
            <th>User name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.username}</td>
              <td>{member.email}</td>
              <td>{member.phoneNumber}</td>
              <td>
                <button onClick={() => handleEdit(member)}>Edit</button>
                <button onClick={() => handleDelete(member)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={{fontFamily:"cursive",color:"white"}}>Edit Member Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
        </label>
        <button type="submit">
          {editingMemberId ? "Save Changes" : "Add Member"}
        </button>
      </form>
    </div>
  );
}

export default AdminPage;