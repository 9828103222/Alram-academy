import React, { useEffect, useState } from "react";
import trainer1 from "../../assets/trainer1.jpg";
import trainer2 from "../../assets/trainer2.jpg";
import trainer3 from "../../assets/trainer3.jpg";
import trainer4 from "../../assets/trainer4.jpg";

function Trainer() {
  // 🔥 pura sentence ek string me
  const text =
    "Hundreds of skilled Experts in Various Expertise in \n Their Respective Fields";

  // 🔥 letters me split
  const letters = text.split("");

  const [index, setIndex] = useState(0);
  const windowSize = 6; // 👉 ek time pe 6 letters orange

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % letters.length);
    }, 100); // 👉 speed (kam = fast)

    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <>
      <div className="trainer">
        <h1>
          {letters.map((char, i) => (
            <span
              key={i}
              className={
                (i >= index && i < index + windowSize) ||
                (index + windowSize > letters.length &&
                  i < (index + windowSize) % letters.length)
                  ? "active"
                  : ""
              }
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p>
          Learn from highly skilled and experienced mentors. Each instructor
          brings real<br /> industry knowledge to the classroom. Their guidance
          helps you grow with<br /> confidence and clarity.
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
                <div className="trainerimg im">
                  <img src={trainer2} alt="" />
                </div>
                <h1>Rahul Choudhary</h1>
                <p>Web Development</p>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 train">
                <div className="trainerimg im">
                  <img src={trainer3} alt="" />
                </div>
                <h1>Lavina Kumawat</h1>
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
