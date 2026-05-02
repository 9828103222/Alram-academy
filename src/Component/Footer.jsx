import React from "react";
// import home from "./Pages/Home"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerbox">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="footbox1">
                    <h5>Contact us</h5>
                <p>Let’s Discuss Your<br/> Vision With Us</p>
                <div className="btn1"><a href="tel:+919828103222"><span><i className="fa-solid fa-phone"></i></span>Schedule a call now</a></div>
                
                <h6>OR EMAIL US AT</h6>
                <div className="btn2"><a href="mailto:alramacademy@gmail.com"><span><i className="fa-solid fa-envelope"></i></span>alramacademy@gmail.com</a></div>
                
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
               <div className="footbox2">
                 <h5>Quick Links</h5>
                <ul>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/reviews">Reviews</a></li>
                    <li><a href="/portfolio">Gallery</a></li>
                    <li><a href="/contact">Contact Us</a></li> */}

                    <li><Link to="/">Home</Link></li>
<li><Link to="/about">About Us</Link></li>
<li><Link to="/courses">Courses</Link></li>
<li><Link to="/reviews">Reviews</Link></li>
<li><Link to="/portfolio">Gallery</Link></li>
<li><Link to="/contact">Contact Us</Link></li>

                    
                </ul>
               </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footbox2">
                 <h5>Information</h5>
                <ul>
                    <li><a href="">Terms of Services</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Cookies Settings</a></li>
                    
                </ul>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
