import React from 'react'
// import whycard1 from "../../assets/whycard1.jpg"

function WhyCards(props) {
  return (
    <div>
        <div
    data-aos="flip-down"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="0"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
      <div className="whycard">
        <div className="whycardimg">
            <img src={props.whyimg} alt="" />
        </div>
            <h1>{props.whyname}</h1>
        <p>{props.whypara}</p>
      </div>
  </div>
    


    </div>
  )
}

export default WhyCards
