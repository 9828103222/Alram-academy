import React from "react";
import coursehomeimg from "../../assets/coursehomeimg.png";

function Courses() {
  return (
    <>
      <div className="coursess">
        <div className="container">
          <div className="courseshome">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h1>Upgrade your skills and build your future</h1>
                <p>
                  Top Mentorship Programs in Tech, Marketing, & Data- Designed
                  and
                  <br /> Delivered by industry maestros.
                </p>
                <a href="">Get Started</a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 coursehomeimg">
                <img src={coursehomeimg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          </div>

          <div className="choosecourses">
            <div className="container">
            <h1>Choose your <br/>Course</h1>

            <div className="choosebtns">
            <div className="row justify-content-between">
              <div className="col-lg-2 col-md-2 col-sm-6 choosebtn1">
                <a href="">All Courses</a>
              </div>
               <div className="col-lg-2 col-md-2 col-sm-6">
                <a href="">Commerce</a>
              </div>
               <div className="col-lg-2 col-md-2 col-sm-6">
                <a href="">UI-UX</a>
              </div>
               <div className="col-lg-2 col-md-2 col-sm-6">
                <a href="">Web Development</a>
              </div>
            </div>
            </div>


            <div className="choosecoursecards">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
