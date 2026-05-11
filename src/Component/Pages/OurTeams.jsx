import React from 'react'
import teamperson1 from "../../assets/teamperson1.png"
import teamperson2 from "../../assets/teamperson2.png"
import teamperson3 from "../../assets/teamperson3.png"
import teamperson4 from "../../assets/teamperson4.png"
import teamperson5 from "../../assets/teamperson10.png"
import teamperson6 from "../../assets/teamperson6.png"
import teamperson7 from "../../assets/teamperson7.png"
import teamperson8 from "../../assets/teamperson8.png"
import teamperson9 from "../../assets/teamperson9.png"
import teamperson10 from "../../assets/teamperson5.jpg"
import teamperson11 from "../../assets/teamperson11.jpg"
import teamperson12 from "../../assets/teamperson12.jpg"

function OurTeams() {
  return (
    <>
       <div className="AAboutSection">
        <h1>OUR TEAM</h1>
        <div className="AAboutmove">
          <h1>Our team</h1>
          <p>
            Home<i class="fa-solid fa-angle-right"></i>Our Team
          </p>
        </div>
      </div>

      <div className="ourteamsection">
        <div className="container">

        <h1>OUR TEAM</h1>
        <h2>Best dedicated team</h2>
        <p>We have a strong team of 700+ in-house professionals along with thousands of remote experts.<br/>
Each team member works with complete dedication and brings deep knowledge in their specialized field.<br/>
Together, we deliver quality, innovation, and reliable results for every project.</p>


<div className="ourteamimg">
    <div className="row">
        <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson1} alt="" className="img-fluid" />
            </div>
                <h3>Gati Jain</h3>
                <h4>BDM- Sales & Academy</h4>
        </div>

        <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson2} alt="" className="img-fluid"  />
            </div>
                <h3>Harshita Verma</h3>
                <h4>Social Media Manager</h4>
        </div>

        <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson3} alt=""  className="img-fluid" />
            </div>
                <h3>Palak Sahu</h3>
                <h4>BDE - Sales</h4>
        </div>



         <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson4} alt="" className="img-fluid" />
            </div>
                <h3>Farhan Ansari</h3>
                <h4>E-Commerce Manager</h4>
        </div>

        <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson5} alt="" className="img-fluid"  />
            </div>
                <h3>Tanisha Sharma</h3>
                <h4>BDE - Sales</h4>
        </div>

        <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson6} alt=""  className="img-fluid" />
            </div>
                <h3>Govind Jangid</h3>
                <h4>E-Commerce Account Manager</h4>
        </div>


         <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson7} alt="" className="img-fluid" />
            </div>
                <h3>Israd  Ahmed</h3>
                <h4>E-Commerce Executive</h4>
        </div>

        <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson8} alt="" className="img-fluid"  />
            </div>
                <h3>Saloni Tomar</h3>
                <h4>Graphic Designer</h4>
        </div>

        <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson9} alt=""  className="img-fluid" />
            </div>
                <h3>Ankita  Sharma</h3>
                <h4>BDE - Sales </h4>
        </div>



         <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson10} alt="" className="img-fluid" />
            </div>
                <h3>Akram Saeed Khan  </h3>
                <h4>Back Office Management</h4>
        </div>

        <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson11} alt="" className="img-fluid"  />
            </div>
                <h3>Mohammed Aamir</h3>
                <h4>E-Commerce Executive</h4>
        </div>

        <div className="col-lg-4 col-md-3 col-sm-12">
            <div className="teamone">
                <img src={teamperson12} alt=""  className="img-fluid" />
            </div>
                <h3>Kabir</h3>
                <h4>BDE - Sales</h4>
        </div>
    </div>
</div>


     <div className="teamcontent">
        <p>We are not just a team - we are your <br/> partners in growth and sucess</p>
      </div>
      <div className="teamoutline">

      <div className="teamline"></div>
      </div>

        </div>
      </div>

     
    </>
  )
}

export default OurTeams
