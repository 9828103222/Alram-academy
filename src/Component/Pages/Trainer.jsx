import React from "react";
import trainer1 from "../../assets/trainer1.jpg";
import trainer2 from "../../assets/trainer2.jpg";
import trainer3 from "../../assets/trainer3.jpg";
import trainer4 from "../../assets/trainer4.jpg";

function Trainer() {
  return (
    <>
      <div className="trainer">
        <h1>
          <span>Hundreds</span> of skilled Experts in Various<br/> Expertise in Their
          <span>Respective Fields</span>
        </h1>
        <p>
          Learn from highly skilled and experienced mentors. Each instructor
          brings real<br/> industry knowledge to the classroom. Their guidance helps
          you grow with<br/> confidence and clarity.
        </p>
        <div className="trainerdp">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 train">


                <div className="trainerimg">
                  <img src={trainer1} alt="" />
                </div>

                
                <h1>Ritu Sharma</h1>
                <p>Ecommerce</p>
              </div>
          <div className="col-lg-3 col-md-6 col-sm-12 train">
                <div className="trainerimg im ">
                  <img src={trainer2} alt="" />
                </div>
                <h1>Rahul Choudhary</h1>
                <p>Web Development</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 train">
                <div className="trainerimg im">
                  <img src={trainer3} alt="" />
                </div>
                <h1> Lavina Kumawat</h1>
                <p>Graphic Designer</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 train">
                <div className="trainerimg">
                  <img src={trainer4} alt="" />
                </div>
                <h1>Somesh Sharma</h1>
                <p>Digital Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trainer;
