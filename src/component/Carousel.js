import React from 'react'
import img from './8093056.jpg'
import img1 from './img.jpg'
import img3 from './immg3.jpg'

export default function Carousel() {
  return (
    <div>
      
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img3} className="d-block w-100" height="700" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Jordan Air 1</h5>
        <p>The best of Sneakers shipped to your Doorstep</p>
       
      </div>
    </div>
    <div className="carousel-item">
      <img src={img} className="d-block w-100"  height="700"alt=""/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Exclusive collection</h5>
        <p>Quality products at affordable prices</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block w-100" height= "700"alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Top Brands</h5>
        <p>Shoes delivered directly from the factory outlet</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
