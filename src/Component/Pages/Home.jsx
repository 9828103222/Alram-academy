import React from "react";
// import homeimg from '../../assets/home.jpg'
import About from "../../Component/Pages/About";
import CoursesProps from "../Props/Coursesprops";
import Reviews from "./Reviews";
import review1 from "../../assets/review1.jpg";
import review2 from "../../assets/review2.jpg";
import review3 from "../../assets/review3.jpg";
import homebgcimg from "../../assets/homebgcimg.png";
import WhyCoursesHere from "./WhyCoursesHere";
import Trainer from "./Trainer";
import Gallery from "./Gallery";
import Touch from "./Touch";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 midd">
              <h1>Don’t Just Upskill, Get  Career-ready, Get Hired</h1>
              <p>
                Top Mentorship Programs in Tech, Marketing, & Data-<br/> Designed and
                Delivered by industry maestros.
              </p>
              <div className="homebgimg">
                <img  src={homebgcimg} alt="" />
              </div>
             <div className="homebtns">
               <div className="homebtn1"><a href="">Explore Program</a></div>
              <div className="homebtn2"><a href="">Explore Program</a></div>
             </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 middd">
              <img className="homeimg1" src={review1} alt="" />
              <img className="homeimg2" src={review2} alt="" />
              <img className="homeimg3" src={review3} alt="" />
              <img className="homeimg4" src={review3} alt="" />
              <img className="homeimg5" src={review2} alt="" />
              <img className="homeimg6" src={review1} alt="" />
              <img className="homeimg7" src={review2} alt="" />
            </div>
          </div>
        </div>
      </div>
     

      <About />
      <CoursesProps />
      <WhyCoursesHere/>
      <Trainer/>
      <Reviews />
      <Gallery/>
      <Touch/>
      
    </>
  );
}

export default Home;
