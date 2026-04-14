import React from 'react'
import ec1 from "../../assets/ec1.png"
import ec2 from "../../assets/ec2.png"
import ec3 from "../../assets/ec3.png"
import ec4 from "../../assets/ec4.png"
import ec5 from "../../assets/ec5.png"
import ec6 from "../../assets/ec6.png"
import ec7 from "../../assets/ec7.png"
import ec8 from "../../assets/ec8.png"
import ec9 from "../../assets/ec9.png"
import ec10 from "../../assets/ec10.png"
import ec11 from "../../assets/ec11.png"
import ec12 from "../../assets/ec12.png"
import ec13 from "../../assets/ec13.png"

function EcommerceInfo() {
  return (
    <>
      <div className="ecommercepage">
        <h1>Courses & Services Info:</h1>
        <ul>
          <li>Domestic Course: 
            <img src={ec1} alt="" />
            <img src={ec2} alt="" />
            <img src={ec3} alt="" />
            <img src={ec4} alt="" />
            </li>
          <li>International Course:
            <img src={ec5} alt="" />
            <img src={ec6} alt="" />
            <img src={ec7} alt="" />
            <img src={ec8} alt="" />
           
          </li>
          <li>Domestic + International Course:
             <img src={ec1} alt="" />
            <img src={ec2} alt="" />
            <img src={ec3} alt="" />
            <img src={ec4} alt="" />
            <img src={ec5} alt="" />
            <img src={ec6} alt="" />
            <img src={ec7} alt="" />
            <img src={ec8} alt="" />
          </li>
          <li>Individual:
            <img src={ec10} alt="" />
            <img src={ec9} alt="" />
            <img src={ec11} alt="" />
            <img src={ec12} alt="" />
            <img src={ec13} alt="" />
            <img src={ec1} alt="" />
            <img src={ec2} alt="" />
            <img src={ec3} alt="" />
            <img src={ec6} alt="" />
            <img src={ec4} alt="" />
            <img src={ec7} alt="" />
            <img src={ec8} alt="" />
          </li>
          <li>Full Course:
          <img src={ec9} alt="" />
            <img src={ec10} alt="" />
            <img src={ec11} alt="" />
            <img src={ec12} alt="" />
            <img src={ec13} alt="" />
            <img src={ec1} alt="" />
            <img src={ec2} alt="" />
            <img src={ec3} alt="" />
            <img src={ec4} alt="" />
            <img src={ec6} alt="" />
            <img src={ec7} alt="" />
            <img src={ec8} alt="" />
          </li>
        </ul>
      </div>
    </>
  )
}

export default EcommerceInfo
