// import React from 'react'
import React, { useState } from 'react'
// import touchbox1 from"../../assets/touchbox1.png"
// import touchbox2 from"../../assets/touchbox2.png"
// import touchbox3 from"../../assets/touchbox3.png"

function Touch() {


    const [formData, setFormData] = useState({
  fname: "",
  emaill: "",
  phone: "",
  discription: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {

  e.preventDefault();

  const response = await fetch(
    "http://localhost/alrambackend/contact.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }
  );

  const data = await response.json();

  alert(data.message);

  setFormData({
    fname: "",
    emaill: "",
    phone: "",
    discription: ""
  });
};


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
      borderRadius: "20px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="touchform">


                <form onSubmit={handleSubmit}>
                <label htmlFor="">Your Name</label><br/>
                <input
type="text"
placeholder='Name'
name='fname'
value={formData.fname}
onChange={handleChange}
/><br/><br/>
                   <label htmlFor="">Email</label><br/>
                <input
type="email"
placeholder='Email'
name='emaill'
value={formData.emaill}
onChange={handleChange}
/><br/><br/>
                  <label htmlFor="">Phone Number</label><br/>
               <input
type="number"
placeholder='Phone Number'
name='phone'
value={formData.phone}
onChange={handleChange}
/><br/><br/>
                  <label htmlFor="">Description</label><br/>
              <input
type="text"
placeholder='Message'
name='discription'
value={formData.discription}
onChange={handleChange}
/><br/><br/>
                  <button type='submit'>Send</button>
                </form>


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
