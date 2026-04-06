import React from 'react'
// import whycard1 from "../../assets/whycard1.jpg"

function WhyCards(props) {
  return (
    <div>
      <div className="whycard">
        <div className="whycardimg">
            <img src={props.whyimg} alt="" />
        </div>
        <h1>{props.whyname}</h1>
        <p>{props.whypara}</p>
      </div>
    </div>
  )
}

export default WhyCards
