import React from 'react'
import logo from '../assets/alram logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav">
        <div className="container">

          <div className="navpart1 navbar-brand">
            <img src={logo} alt="" />
          </div>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarContent">

            <div className="navpart2 mx-auto">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">ABOUT US</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/courses">COURSES</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/reviews">Reviews</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/portfolio">PORTFOLIO</Link></li>
              </ul>
            </div>

            <div className="navpart3">
              <button>
                <Link to="/contact">Contact us</Link> </button>
            </div>

          </div>
        </div>
      </nav>
       <div className="whatsappicon">
        <a href="https://wa.me/919828103222" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    </>
  )
}

export default Navbar
