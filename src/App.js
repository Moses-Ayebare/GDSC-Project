import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import Dashboard from "./components/pages/Dashboard";
import RegisterWorkshop from "./components/RegisterWorkshop";
import RegisterHackathon from "./components/RegisterHackathon";
import RegisterTechtalk from "./components/RegisterTechtalk";
import AdminPage from "./components/pages/AdminPage";

function App() {
  return (
    <>
      <Navbar />

      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/registerworkshop" element={<RegisterWorkshop />} />
            <Route path="/registerhackathon" element={<RegisterHackathon />} />
            <Route path="/registertechtalk" element={<RegisterTechtalk />} />
          </Routes>
        </div>
      </div>
      
    </>
  );
}

export default App;
