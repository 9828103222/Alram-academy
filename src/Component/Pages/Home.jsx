import React from "react";
// import homeimg from '../../assets/home.jpg'
import About from "../../Component/Pages/About";
import Reviews from "./Reviews";
import homeimg1 from "../../assets/homeimg1.jpg";
import homeimg2 from "../../assets/homeimg2.jpg";
import homeimg3 from "../../assets/homeimg3.jpg";
import homeimg5 from "../../assets/homeimg5.jpg";
import homeimg6 from "../../assets/homeimg6.png";
import homeimg8 from "../../assets/homeimg8.png";
import homeimg7 from "../../assets/homeimg7.jpeg";

import homebgcimg from "../../assets/homebgcimg.png";
import WhyCoursesHere from "./WhyCoursesHere";
import Trainer from "./Trainer";
import Gallery from "./Gallery";
import Touch from "./Touch";
import aboutimg from '../../assets/aboutimg.png'
import CoursesProps from "../Props/Coursesprops";
import ReviewsProps from "../Props/ReviewsProps";


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
              <div className="homeimg1">
              <img  src={homeimg3} alt="" />
              </div>

              <div className="homeimg2">
              <img  src={homeimg1} alt="" />
              </div>

               <div className="homeimg3">
              <img  src={homeimg2} alt="" />
              </div>

              <div className="homeimg4">
              <img  src={homeimg7} alt="" />
              </div>

              <div className="homeimg5">
              <img  src={homeimg5} alt="" />
              </div>

              <div className="homeimg6">
              <img  src={homeimg6} alt="" />
              </div>

              <div className="homeimg7">
              <img  src={homeimg8} alt="" />
              </div>


              
            </div>
          </div>
        </div>
      </div>
     

       <div className="aboutsection">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-mg-6 col-sm-12 ">
                      <div
    data-aos="fade-right"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="0"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
    <h1>ABOUT US</h1>
                    <p>Alram Academy is a modern learning platform dedicated to providing high-quality education to every student. We focus on smart classes, experienced faculty, and practical learning methods to help learners become future-ready. Our goal goes beyond completing the syllabus — we aim to build confidence, skills, and real-life understanding in every student. At Alram Academy, we offer a safe, supportive, and inspiring environment where learners of all ages can grow, achieve their goals, and unlock their true potential.</p>
                    <button><a href="/contact">Contact us</a></button>
  </div>
                    
                  </div>
                  <div className="col-lg-4 col-mg-6 col-sm-12">
                      <div
    data-aos="fade-left"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="0"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
    <div className="aboutimg">
                        <img src={aboutimg} alt="" />
                      </div>
  </div>
                      
                  </div>
                </div>
              </div>
          </div>
      <CoursesProps/>
      <WhyCoursesHere/>
      <Trainer/>
      <ReviewsProps/>
      <Gallery/>
      <Touch/>
      
    </>
  );
}

export default Home;
