import React from "react"; // import React library
import { useLocation } from "react-router-dom"; // import useLocation hook from react-router-dom library
import "./Dashboard.css"; // import CSS file
import Footer from "../Footer"; // import Footer component

function Dashboard(props) {
  const location = useLocation(); // use useLocation hook to get the current location
  const { state } = location; // get the state object from the current location
  const username = state ? state.username : null; // extract the username value from the state object

  const handleLogout = () => {
    // define handleLogout function
    sessionStorage.clear(); // clear user session data
    window.location.href = "/"; // redirect to home page
  };

  return (
    <div className="dashboard-container"> {/* dashboard container */}
      <div className="dashboard-welcome"> {/* dashboard welcome section */}
        <h1 style={{color:"yellowgreen"}}>{username ? `Welcome! ${username}` : "Welcome"}</h1> {/* display the username if available, otherwise just display "Welcome" */}
        <p className="paragraph">Here are some upcoming events and featured projects:</p> {/* a paragraph with a message */}
      </div>
      <div className="background-image"> {/* background image */}
      <div className="featured"> {/* featured section */}
        <div className="featured-section"> {/* upcoming events section */}
          <h2 className="featured-heading">Upcoming Events</h2> {/* title */}
          <div className="event-card"> {/* event card */}
            <div className="event-card-image"> {/* event card image */}
              <img src="/GDSC.png" alt="Event 1" /> {/* event image */}
            </div>
            <div className="event-card-content"> {/* event card content */}
              <h3 className="event-card-heading">Workshop on React Native</h3> {/* event title */}
              <p className="event-card-text">May 5th</p> {/* event date */}
              <a href="/registerworkshop" className="event-card-button"> {/* register button */}
                Register
              </a>
            </div>
          </div>
          {/* two more similar event cards */}
        </div>

        <div className="featured-section"> {/* featured projects section */}
          <h2 className="featured-heading">Our Projects</h2> {/* title */}
          <div className="project-card"> {/* project card */}
            <div className="project-card-image"> {/* project card image */}
              <img src="/GDSC.png" alt="Project 1" /> {/* project image */}
            </div>
            <div className="project-card-content"> {/* project card content */}
              <h3 className="project-card-heading">Project 1</h3> {/* project title */}
              <p className="project-card-text">Coming Soon!.</p> {/* project description */}
              <a href="/" className="project-card-button"> {/* learn more button */}
                Learn More
              </a>
            </div>
          </div>
          {/* two more similar project cards */}
        </div>
      </div>
      </div>
      <button onClick={handleLogout} className="logout-button"> {/* logout button */}
        Logout
      </button>
      <Footer /> {/* footer component */}
    </div>
  );
}

export default Dashboard; // export the Dashboard component
