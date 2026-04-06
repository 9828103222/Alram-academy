import React from 'react'
import aboutimg from '../../assets/aboutimg.png'

function About() {
 
  return (
    <>
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

   
    </>
  )
}

export default About
