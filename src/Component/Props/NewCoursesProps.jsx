import React from 'react'

function NewCoursesProps(props) {
  return (
    <>
      <div className="newcourses">
        <div className="newcoursesimg">
        <img src={props.img}  alt="" />
        </div>
        <p>{props.newpara}</p>
<button><a href="">View Courses</a></button>
      </div>
    </>
  )
}

export default NewCoursesProps
