import React from "react";
import coursehomeimg from "../../assets/coursehomeimg.png";
import choosecoursecard1 from "../../assets/choosecoursecard1.png";
import choosecoursecard2 from "../../assets/choosecoursecard2.png";
import choosecoursecard3 from "../../assets/choosecoursecard3.png";
import choosecoursecard4 from "../../assets/choosecoursecard4.png";
import choosecoursecard5 from "../../assets/choosecoursecard5.png";
import choosecoursecard6 from "../../assets/choosecoursecard6.png";
import DigitalMarketingInfo from "../course pages/DigitalMarketingInfo";
import EcommerceInfo from "../course pages/EcommerceInfo";
import WebDevelopmentInfo from "../course pages/WebDevelopmentInfo";
import { useEffect } from "react";

function Courses() {


  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100); // thoda delay (important)
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);


  return (
    <>
      <div className="AAboutSection">
        <h1>Courses</h1>
        <div className="AAboutmove">
          <h1>Courses</h1>
          <p>
            Home<i class="fa-solid fa-angle-right"></i>Courses
          </p>
        </div>
      </div>
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
            <h1>
              Choose your <br />
              Course
            </h1>

            <div  id="target-course" className="choosebtns">
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
              <div className="row justify-content-between">
                <div className="col-lg-4 col-md-6 col-sm-12 choosecoursecards1 ">
                  <div className="innertext">
                    <div className="frontcard">
                      <h1>UI/UX DESIGNING</h1>
                      <p>By Somesh Sharma</p>
                      <img
                        src={choosecoursecard1}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="buttons">
                        <a href="">1.3 Hour</a>
                        <a href="">All Level</a>
                      </div>
                    </div>
                    <div className="backcard1">
                      <p>
                        Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus in obcaecati reprehenderit sed dolores repudiandae ea ducimus sint a? ipsum dolor, sit amet consectetur adipisicing
                        elit. Beatae, cumque?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 choosecoursecards2">
                  <div className="innertext">
                  <div className="frontcard">
                  <h1>UI/UX DESIGNING</h1>
                  <p>By Somesh Sharma</p>
                  <img src={choosecoursecard2} alt="" className="img-fluid" />
                  <div className="buttons">
                    <a href="">1.3 Hour</a>
                    <a href="">All Level</a>
                  </div>
                </div>
                 <div className="backcard2">
                      <p>
                        Lorem ipsum dolor,Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit aliquid minima vero laborum consequuntur delectus magnam maxime placeat numquam. sit amet consectetur adipisicing
                        elit. Beatae, cumque?
                      </p>
                    </div>
                </div>

                </div>






                <div className="col-lg-4 col-md-6 col-sm-12 choosecoursecards3">
                  <div className="innertext">
                  <div className="frontcard">
                  <h1>UI/UX DESIGNING</h1>
                  <p>By Somesh Sharma</p>
                  <img src={choosecoursecard3} alt="" className="img-fluid" />
                  <div className="buttons">
                    <a href="">1.3 Hour</a>
                    <a href="">All Level</a>
                  </div>
                </div>
                 <div className="backcard3">
                      <p>
                        Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perspiciatis tempora earum repellendus aspernatur ea nemo asperiores placeat voluptates laboriosam? consectetur adipisicing
                        elit. Beatae, cumque?
                      </p>
                    </div>
                </div>
                </div>








                <div className="col-lg-4 col-md-6 col-sm-12 choosecoursecards1">
                  <div className="innertext">
                  <div className="frontcard">
                  <h1>UI/UX DESIGNING</h1>
                  <p>By Somesh Sharma</p>
                  <img src={choosecoursecard4} alt="" className="img-fluid" />
                  <div className="buttons">
                    <a href="">1.3 Hour</a>
                    <a href="">All Level</a>
                  </div>
                </div>
                 <div className="backcard1">
                      <p>
                        Lorem ipsum dolor, sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus minima atque sit iste, ipsa autem animi. Architecto, labore animi. amet consectetur adipisicing
                        elit. Beatae, cumque?
                      </p>
                    </div>
                </div>
                </div>






                <div className="col-lg-4 col-md-6 col-sm-12 choosecoursecards2">
                  <div className="innertext">
                  <div className="frontcard">
                  <h1>UI/UX DESIGNING</h1>
                  <p>By Somesh Sharma</p>
                  <img src={choosecoursecard5} alt="" className="img-fluid" />
                  <div className="buttons">
                    <a href="">1.3 Hour</a>
                    <a href="">All Level</a>
                  </div>
                </div>
                 <div className="backcard2">
                      <p>
                        Lorem ipsum dolor, sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt at placeat beatae, harum nulla commodi cupiditate incidunt tempora sequi. amet consectetur adipisicing
                        elit. Beatae, cumque?
                      </p>
                    </div>
                </div>
                </div>






                <div className="col-lg-4 col-md-6 col-sm-12 choosecoursecards3">
                  <div className="innertext">
                  <div className="frontcard">
                  <h1>UI/UX DESIGNING</h1>
                  <p>By Somesh Sharma</p>
                  <img src={choosecoursecard6} alt="" className="img-fluid" />
                  <div className="buttons">
                    <a href="">1.3 Hour</a>
                    <a href="">All Level</a>
                  </div>
                </div>
                 <div className="backcard3">
                      <p>
                        Lorem ipsum dolor, sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur illo reprehenderit culpa iusto? Voluptate temporibus a iusto in quae. amet consectetur adipisicing
                        elit. Beatae, cumque?
                      </p>
                    </div>
                    </div>
                    </div>





              </div>
            </div>
          </div>
        </div>
      </div>
      <DigitalMarketingInfo />
      <EcommerceInfo />
      <WebDevelopmentInfo />
    </>
  );
}

export default Courses;
