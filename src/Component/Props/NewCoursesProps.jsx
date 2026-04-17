import React from 'react'

function NewCoursesProps(props) {
  return (
    <>
      <div className="newcourses">
  <div
    data-aos="zoom-in-down"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="0"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
 <div className="newcoursesimg">
        <img src={props.img}  alt="" />
        </div>
  </div>

       
        <p>{props.newpara}</p>
<button><a href="">View Courses</a></button>
      </div>
    </>
  )
}

export default NewCoursesProps
