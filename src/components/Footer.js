import React from 'react';
import "./Footer.css"
export default function Footer(){

    return(
<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <div className="footer-widget">
          {/* <h3>About GDSC</h3>
          <p>GDSC is a community of developers who are interested in Google technologies and are willing to share knowledge and experience. We organize events, workshops, and activities to promote collaboration and skill-building among members.</p> */}
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="footer-widget">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><i className="fa fa-map-marker"></i>Uganda Christian University</li>
            <li><i className="fa fa-phone"></i>+256 123456789</li>
            <li><i className="fa fa-envelope"></i>ucu@gdsc.com</li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="footer-widget">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="/"><i className="fa fa-facebook"></i></a></li>
            <li><a href="/"><i className="fa fa-twitter"></i></a></li>
            <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="/"><i className="fa fa-youtube"></i></a></li>
            <li><a href="/"><i className="fa fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>


    );
}