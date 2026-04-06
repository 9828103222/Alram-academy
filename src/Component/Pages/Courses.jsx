import React from "react";
import NewCoursesProps from "../Props/NewCoursesProps";
import newcourses1 from "../../assets/newcourses1.png";
import newcourses2 from "../../assets/newcourses2.jpg";
import newcourses3 from "../../assets/newcourses3.jpg";

function Courses() {
  return (
    <>
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
      {/* this is amazon selling overview section */}
      {/* <div className="sellingoverview">
        <div className="container">
          <div className="sellingpart1">
            <h1> {props.title}</h1>
            <p>{props.about}</p>
          </div>
          <div className="sellingpart2">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <p>{props.description}</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 amazoncor ">
                <div className="amazoncor1">
                  <img src={props.amazoncor} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sellingoverviewtwo">
        <div className="container">
          <div className="sellingpart1">
            <h1> {props.title2}</h1>
            <p>{props.about2}</p>
          </div>
          <div className="sellingpart2">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <p>{props.description2}</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 amazoncor">
                  <div className="amaze">
                  <img src={props.flipcardcor} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sellingoverview">
        <div className="container">
          <div className="sellingpart1">
            <h1> {props.title3}</h1>
            <p>{props.about3}</p>
          </div>
          <div className="sellingpart2">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <p>{props.description3}</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 amazoncor">
                  <div className="amaze messho">
                  <img src={props.messhocor} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sellingoverviewtwo">
        <div className="container">
          <div className="sellingpart1">
            <h1> {props.title4}</h1>
            <p>{props.about4}</p>
          </div>
          <div className="sellingpart2">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <p>{props.description4}</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 amazoncor">
                  <div className="amaze">
                  <img src={props.jiocor} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Courses;
