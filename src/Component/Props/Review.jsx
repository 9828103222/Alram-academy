import React from 'react'


function Review(props) {
  return (
    <>
    <div className="review">
                  <p>
                  {props.reviewhead}
                  </p>
                  <div className="reviewimg">
                    <img src={props.reviewimg} alt="" />
                  </div>
                  <div className="reviewstars">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <h4>{props.reviewname} </h4>
                </div>
    


    </>
  )
}

export default Review


