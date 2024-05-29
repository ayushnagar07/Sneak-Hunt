import React from 'react'
import prd1 from './prd1.jpg';
import pine from './pine green.webp'
import red from './red.jpg'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import { useState } from 'react';

export default function Shoppingsec(props) {
    const [text,setText]=useState("Rs.14999");
    const handelclick = ()=>{
        console.log("Clicked");
        setText("Price dropped Rs.13499 (10% off)")
    }
   
  return (
    <div>
      <div className="container my-4">
         <div className="row">
             <div className="col">
                <img src={prd1} height='200' width='300' alt=''/>
                <div>
                    <p>Jordan Air 1<br/>UK 7-10<br/><br/>Rs.4999
                    <br/>
                <a href="cart.html">
                        <button type="button" className="btn btn-primary" >Buy now</button>
                    </a>
                    
                    </p>
                </div>
                    
            </div>
            <div className="col">
            <img src={pine} height='200' width='300' alt=''/>   
            <div>
                    <p>Jordan Pine green Sb-4<br/>UK 7-10<br/><br/>{text}
                    
                    <br/>
                    <a href="cart.html">

                    <button type="button" className="btn btn-primary" >Buy Now</button>
                    </a>
                    <div className='mt-2'>
                    <button type="button" className="btn btn-success" onClick={handelclick}>Check Offers</button>
                    </div>
                    
                    </p>
                </div>
                
            </div>
            <div className="col">
            <img src={red} height='200' width='300' alt=''/>  
            <div>
                    <p>Cherry red Canvas<br/>UK 7-10<br/><br/>Rs.5999
                    <br/>
                    <a href="cart.html">

                    <button type="button" className="btn btn-primary">Buy now</button>
                    </a>
                    
                    </p>
                </div>
                
             </div>
        </div>
        </div>
        <div className="container my-4">
         <div className="row">
             <div className="col">
                <img src={img1} height='200' width='300' alt=''/>
                <div>
                    <p>Chunky yellow m1-2<br/>UK 7-10<br/><br/>Rs.7999
                    <br/>
                    <button type="button" className="btn btn-primary">Buy now</button>
                    
                    </p>
                </div>
                    
            </div>
            <div className="col">
            <img src={img2} height='200' width='300' alt=''/>   
            <div>
                    <p>Jordan Air 1<br/>UK 7-10<br/><br/>Rs.3999
                    <br/>
                    <button type="button" className="btn btn-primary">Buy now</button>
                    
                    </p>
                </div>
                
            </div>
            <div className="col">
            <img src={img3} height='200' width='300' alt=''/>  
            <div>
                    <p>Notion brown sneaker<br/>UK 7-10<br/><br/>Rs.8999
                    <br/>
                    <button type="button" className="btn btn-primary">Buy now</button>
                    
                    </p>
                </div>
                
             </div>
        </div>
        </div>
    </div>
  )
}
