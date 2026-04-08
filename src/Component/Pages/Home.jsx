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
import aboutimg from '../../assets/aboutimg.png'


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
     

       <div className="aboutsection">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-mg-6 col-sm-12">
                    <h1>ABOUT US</h1>
                    <p>Alram Academy is a modern learning platform dedicated to providing high-quality education to every student. We focus on smart classes, experienced faculty, and practical learning methods to help learners become future-ready. Our goal goes beyond completing the syllabus — we aim to build confidence, skills, and real-life understanding in every student. At Alram Academy, we offer a safe, supportive, and inspiring environment where learners of all ages can grow, achieve their goals, and unlock their true potential.</p>
                    <button>Contact us</button>
                  </div>
                  <div className="col-lg-4 col-mg-6 col-sm-12">
                      <div className="aboutimg">
                        <img src={aboutimg} alt="" />
                      </div>
                  </div>
                </div>
              </div>
          </div>
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
