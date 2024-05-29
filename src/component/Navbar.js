import React from 'react'
import logo from "./new.png"
import cartpic from "./shopping.svg"


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
         <img className="navbar-brand"src={logo} alt='new' height="100" width="100"></img>
        <a className="navbar-brand" href="/" ><b>SneakHunt</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="/"/>Home
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Cutomercare">My account</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Collection
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Unisex</a></li>
                <li><a className="dropdown-item" href="/">Sneakers</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Casuals</a></li>
              </ul>
            </li>
            <li className="nav-item">
     
              <a className="nav-link" aria-disabled="true" href="/customercare">Customer care</a>
           
            </li>
            <li className="nav-item">
     
                <a className="nav-link" aria-disabled="true" href="cart.html"><img src={cartpic} height='50' width='50' ></img></a>
  
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
    </div>
  )
}
