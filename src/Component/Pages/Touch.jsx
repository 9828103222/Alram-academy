import React from 'react'
// import touchbox1 from"../../assets/touchbox1.png"
// import touchbox2 from"../../assets/touchbox2.png"
// import touchbox3 from"../../assets/touchbox3.png"

function Touch() {
  return (
    <>
    <div className="touch">
    <h1>Get In Touch</h1>
    <p>Feel free to contact us? submit your queries here and we will get back to you as soon as possible.</p>

<div className="container">

      <div className="contactTouch">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 ">
                <div className="touchbg">
                    <div className="touchboximg1">
                        <span><i className="fa-solid fa-location-dot"></i></span>
                    </div>
                    <h1>Address</h1>
                    <p>Shyam nagar Sodala Jaipur</p>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="touchbox1">
                    <div className="touchboximg1">
                        <span><i className="fa-solid fa-phone-volume"></i></span>
                    </div>
                    <h1>Contact</h1>
                    <p>Shyam nagar Sodala Jaipur</p>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="touchbox1">
                    <div className="touchboximg1">
                        <span><i className="fa-solid fa-envelope"></i></span>
                    </div>
                    <h1>Email</h1>
                    <p>Alramacademy@gmail.com</p>
                </div>
            </div>
        </div>
    </div>

<div className="touchmap">
    <div className="row ">
        <div className="col-lg-6 col-md-6 col-sm-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14233.43168115129!2d75.75468847698359!3d26.892133686121998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5aba396c88d%3A0xfdeb14ab79f5fd15!2sAlram%20Academy!5e0!3m2!1sen!2sin!4v1775022954006!5m2!1sen!2sin"  height="440" style={{border: "1px solid black", 
      borderRadius: "20px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="touchform">
                <label htmlFor="">Your Name</label><br/>
                <input type="text" placeholder='Name' /><br/><br/>
                   <label htmlFor="">Email</label><br/>
                <input type="email"  placeholder='Email'/><br/><br/>
                  <label htmlFor="">Phone Number</label><br/>
                <input type="number" placeholder='Phone Number' /><br/><br/>
                  <label htmlFor="">Description</label><br/>
                <input type="text" placeholder='Message'/><br/><br/>
                  <button type='submit'>Send</button>
            </div>
        </div>
    </div>
</div>



</div>
  
      
    </div>
    </>
  )
}

export default Touch
