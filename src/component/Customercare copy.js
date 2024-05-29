import React from 'react'

export default function Customercare() {
  return (
    
        <div className="container my-5">
            <div className="row">
        <div className="col-md-5 offset-md-5"><h2>Customer Care</h2></div></div>


<div className="row gx-lg-0 gy-4 my-3">

<div className="col-lg-4">

  <div className="info-container d-flex flex-column align-items-center justify-content-center">
    <div className="info-item d-flex">
      <i className="bi bi-geo-alt flex-shrink-0"></i>
      <div>
        <h4>Location:</h4>
        <p>JP Nagar, Bengaluru</p>
      </div>
    </div>

    <div className="info-item d-flex">
      <i className="bi bi-envelope flex-shrink-0"></i>
      <div>
        <h4>Email:</h4>
        <p>Foothut@gmail.com</p>
      </div>
    </div>

    <div className="info-item d-flex">
      <i className="bi bi-phone flex-shrink-0"></i>
      <div>
        <h4>Call:</h4>
        <p>+918787896896</p>
      </div>
    </div>

    <div className="info-item d-flex">
      <i className="bi bi-clock flex-shrink-0"></i>
      <div>
        <h4>Open Hours:</h4>
        <p>Mon-Sat: 11AM - 23PM</p>
      </div>
    </div>
  </div>

</div>

<div className="col-lg-8">
  <form action="https://script.google.com/macros/s/AKfycbx7Joic9XMl1i2JRMXy45oCpyA0Oah1_F46wEDJZi-9Y9dnG-QeJyhHKjlmINQRGZJL_g/exec" method="post" role="form" className="php-email-form">
    <div className="row">
      <div className="col-md-6 form-group">
        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" fdprocessedid="ks72bp"/>
      </div>
      <div className="col-md-6 form-group mt-3 mt-md-0">
        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" fdprocessedid="mzt0ef"/>
      </div>
    </div>
    <div className="form-group mt-3">
      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" fdprocessedid="yzxu4"/>
    </div>
    <div className="form-group mt-3">
      <textarea className="form-control" name="message" rows="7" placeholder="Message" required=""></textarea>
    </div>
  
    
    <div className="text-center my-2"><button type="submit" className='btn btn-primary' name="submit" fdprocessedid="lii2gq">Send Message</button></div>
    
  </form>
</div>

</div>
               

        </div>
      

  )
}
