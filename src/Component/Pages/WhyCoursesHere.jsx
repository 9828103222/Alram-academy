import React from "react";
import WhyCards from "../Props/WhyCards";
import whycard1 from "../../assets/whycard1.png"
import whycard2 from "../../assets/whycard2.png"
import whycard3 from "../../assets/whycard3.png"
import whycard4 from "../../assets/whycard4.png"


function WhyCoursesHere() {
  return (
    <>
      <div className="whycourseshere">
        <div className="container">
          <h1>WHY COURSE HERE?</h1>
          <p>
            Because it teaches real, industry-ready skills with simple,
            practical lessons. You learn through hands-on projects, updated
            content, and expert guidance so you can grow faster and start your
            career with confidence.
          </p>

          <div className="cards">
            <div className="row">
                
            <div className="col-lg-3">
         
    <WhyCards 
              whyimg={whycard1}
              whyname="Time Flexibility"
              whypara="Learn anytime, anywhere with flexible class 
schedules designed for your convenience."
              />

              
            </div>
            <div className="col-lg-3">
              <WhyCards
              whyimg={whycard2}
              whyname="Quality Material"
                  whypara="Get access to high-quality, updated learning content crafted by industry experts."
              
              />
            </div>
            <div className="col-lg-3">
              <WhyCards 
              whyimg={whycard3}
              whyname="Expert Teachers"
                  whypara="Premium learning at pocket-friendly prices great value with no compromise."
              
              />
            </div>
            <div className="col-lg-3">
              <WhyCards
              whyimg={whycard4}
              whyname="Affordable Prices"
              whypara="Learn from experienced mentors who guide you with practical knowledge and real skills."
                
              
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyCoursesHere;
