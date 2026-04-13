import React from "react";
import Courses from "../Pages/Courses.jsx";
import NewCoursesProps from "../Props/NewCoursesProps";
import newcourses1 from "../../assets/newcourses1.png";
import newcourses2 from "../../assets/newcourses2.jpg";
import newcourses3 from "../../assets/newcourses3.jpg";

function CoursesProps() {
  return <>
  <div className="coursessection">
        <div className="container">
          <h1>COURSES</h1>
          <div className="coursespart">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <NewCoursesProps
                  img={newcourses1}
                  newpara="Learn user-centered design and create modern, intuitive interfaces.
Build real projects and become industry-ready."
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <NewCoursesProps
                  img={newcourses2}
                  newpara="Learn user-centered design and create modern, intuitive interfaces.
Build real projects and become industry-ready."
                />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <NewCoursesProps
                  img={newcourses3}
                  newpara="Learn user-centered design and create modern, intuitive interfaces.
Build real projects and become industry-ready."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
     
  </>;
}

export default CoursesProps;
