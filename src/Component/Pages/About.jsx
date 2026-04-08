import React from "react";
// import aboutimg from '../../assets/aboutimg.png'
import ExpertiesSectionimg from "../../assets/ExpertiesSectionimg.jpg";
import AdvantagesSectionimg from "../../assets/AdvantagesSectionimg.png";
import coreimg1 from "../../assets/coreimg1.png";
import coreimg2 from "../../assets/coreimg2.png";
import coreimg3 from "../../assets/coreimg3.png";

function About() {
  return (
    <>
      <div className="AAboutSection">
        <h1>ABOUT US</h1>
        <div className="AAboutmove">
          <h1>ABOUT US</h1>
          <p>
            Home<i class="fa-solid fa-angle-right"></i>About Us
          </p>
        </div>
      </div>

      <div className="ExpertiesSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="ExpertiesSectionOne">
                <img src={ExpertiesSectionimg} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="ExpertiesSectionTwo">
                <h1>OUR EXPERTISE</h1>
                <h5>
                  Exclusive Project <br />
                  Management Agency
                </h5>
                <p>
                  We are a leading project management agency delivering smart,
                  efficient and custom solutions for businesses of all sizes.
                  Our team creates high-converting landing pages, visually
                  appealing data dashboards, and seamless digital experiences
                  that help brands grow faster. With our strategic approach and
                  modern tools, we ensure every project is executed with
                  clarity, creativity, and measurable impact.
                </p>
                <div className="ExpertiesSectionLast">
                  <div className="row justify-content-between">
                    <div className="col-lg-3 col-md-3 col-sm-3 ">
                      <h1>50k+</h1>
                      <p>Monthly Active Users</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                      <h1>50k+</h1>
                      <p>Monthly Active Users</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                      <h1>50k+</h1>
                      <p>Monthly Active Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="AdvantagesSection">
        <div className="row align-items-center ">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="AdvantagesSectionOne">
              <h2>OUR ADVANTAGES</h2>
              <h1>
                We work with 10+ years <br /> of experience
              </h1>
              <p>
                We have been delivering professional services since 2010. With
                more <br />
                than a decade of industry experience, we have solved countless
                <br /> challenges and helped businesses grow with smart,
                effective and
                <br /> modern solutions. Our work is driven by dedication,
                patience and
                <br /> a commitment to quality.
              </p>

              <div className="AdvantagesSectionList">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <li>
                      <i class="fa-solid fa-right-long"></i>Quick Access
                    </li>
                    <li>
                      <i class="fa-solid fa-right-long"></i>Creativity & Clarity
                    </li>
                    <li>
                      <i class="fa-solid fa-right-long"></i>Best Leadership
                      Ideas
                    </li>
                    <li>
                      <i class="fa-solid fa-right-long"></i>Dedicated Team
                    </li>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <li>
                      <i class="fa-solid fa-right-long"></i>Pixel-Perfect
                      Designs
                    </li>
                    <li>
                      <i class="fa-solid fa-right-long"></i>Online Support
                    </li>
                    <li>
                      <i class="fa-solid fa-right-long"></i>Expert Professionals
                    </li>
                    <li>
                      <i class="fa-solid fa-right-long"></i>Affordable Pricing
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 AdvantagesSectionimgg">
            <img src={AdvantagesSectionimg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="core">
        <div className="container">
          <h2>OUR CORE VALUE</h2>
          <h1>Best solution for you</h1>
          <p>
            We provide self-service data analytics tools that help you create
            visually appealing data visualizations and insightful dashboards
            within minutes. Our platform makes data simple, secure, and easy to
            understand for every user.
          </p>
          <div className="coreCards">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-md-3 col-sm-12 corecard">
                <div className="coreimg">
                  <img src={coreimg1} alt="" />
                </div>
                <h1>Analyze Your Data</h1>
                <p>
                  Create reports easily with a drag-and-drop interface and
                  analyze your datasets effortlessly.
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 corecard">
                <div className="coreimg">
                  <img src={coreimg2} alt="" />
                </div>
                <h1>Collaborate Securely</h1>
                <p>
                  Share and publish your reports with your colleagues and collaborate safely with multiple users.
                </p>
              </div>
               <div className="col-lg-3 col-md-3 col-sm-12 corecard">
                <div className="coreimg">
                  <img src={coreimg3} alt="" />
                </div>
                <h1>Embedded Analytics</h1>
                <p>
                 Access powerful analytics tools directly within your brand environment and enhance data-driven decision making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
