import React from "react";

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
                <div className="btn1"><a href=""><span><i class="fa-solid fa-phone"></i></span>Schedule a call now</a></div>
                
                <h6>OR EMAIL US AT</h6>
                <div className="btn2"><a href=""><span><i class="fa-solid fa-envelope"></i></span>alramacademy@gmail.com</a></div>
                
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
               <div className="footbox2">
                 <h5>Quick Links</h5>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Case Studies</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">About me</a></li>
                    
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
