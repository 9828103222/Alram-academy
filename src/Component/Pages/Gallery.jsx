import React from 'react'
import gallery1 from "../../assets/gallery1.jpg"
import gallery2 from "../../assets/gallery2.jpg"
import gallery3 from "../../assets/gallery3.jpg"
import gallery4 from "../../assets/gallery4.png"
import gallery5 from "../../assets/gallery5.png"
import gallery6 from "../../assets/gallery6.png"

function Gallery() {
  return (
    <>
      <div className="gallery">
         <h1>
    {"Gallery".split("").map((char, i) => (
      <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
        {char}
      </span>
    ))}
  </h1>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 gal">
                    <div className="galleryimg">
                        <img src={gallery1} alt="" className='img-fluid'/>
                    </div>
                </div>
               <div className="col-lg-4 col-md-6 col-sm-12 gal">
                    <div className="galleryimg">
                        <img src={gallery2} alt="" className='img-fluid'/>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 gal">
                    <div className="galleryimg">
                        <img src={gallery3} alt="" className='img-fluid' />
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 gal">
                    <div className="galleryimg">
                        <img src={gallery4} alt="" className='img-fluid'/>
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 gal">
                    <div className="galleryimg">
                        <img src={gallery5} alt="" className='img-fluid' />
                    </div>
                </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 gal">
                    <div className="galleryimg">
                        <img src={gallery6} alt="" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
