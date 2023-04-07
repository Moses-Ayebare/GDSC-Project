// import React from 'react';
// import "./Home.css";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();
//   return (
    
//     <div className='container'>
//     <h1 className="heading">
//   <span>DSC-</span>
//   <span>UCU-</span>
//   <span>Community</span>
// </h1>

//       <div className="background-image"></div>
//       <p className='text'>
//      We are the <span style={{color:"green"}}>Google Developer Student Clubs at Uganda Christian University.</span>  Our aim is to help students grow their knowledge in various <span style={{color: 'blue'}}>technologies</span> and to connect them with opportunities to solve real-life problems using <span style={{color: 'blue'}}>technology</span>.
//      <span> <button className='join-btn' onClick={()=> navigate("/signup")}>Join us</button>and let's build a better future together!</span>
// </p>


//     </div>
//   );
// }

// export default Home;

// Importing the React library
import React from 'react';
// Importing the Home.css file
import './Home.css';
// Importing the Footer component
import Footer from '../Footer';

// Creating a functional component named Home
function Home() {
  // The component returns JSX code
  return (
    // A container for the whole Home component
    <div className='container-home'>
      {/* A hero section with content and an image */}
      <div className='hero'>
        {/* The content of the hero section */}
        <div className='hero-content'>
          <h1 className='hero-heading'>Developer Student Clubs - Uganda Christian University</h1>
          <p className='hero-text'>
            We are a community of student developers passionate about building solutions that solve real-life problems. Our aim is to grow our knowledge and connect with others to create a better future using technology.
          </p>
          {/* Two buttons for signing up and logging in */}
          <a className='hero-button' href='/signup'>Join Us</a>
          <a className='hero-button' href='/login'>Login</a>
        </div>
        {/* An image for the hero section */}
        <div className='hero-image'>
          <img src="/dsc-logo-2.png" alt='GDSC UCU' />
        </div>
      </div>
      {/* Adding the Footer component */}
      <Footer />
    </div>
  );
}

// Exporting the Home component as the default export
export default Home;
