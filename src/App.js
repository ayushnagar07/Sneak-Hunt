import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import Shoppingsec from './component/Shoppingsec'
import Customercare from './component/Customercare';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




function App() {

  const router=createBrowserRouter([
    { path: "/",
      element : <Shoppingsec/>
    },
    {
        path:"/Customercare",
        element: <Customercare/>

    },
  ])
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
   console.log(data);
  }

  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/demo',{
      method:'GET',
    })
   const data = await response.json();
   setUsers(data);
  }

  useEffect(()=>{
    getUsers();
  },[])

  return (
    <div>
       
      
      <><Navbar/>
      <Carousel/>
      <RouterProvider router={router}/>
     
     
      
      
    
    <div >
      
  <div className="info-container d-flex flex-column align-items-center justify-content-center">
    <div className="info-item d-flex">
     <form onSubmit={handleSubmit}>
        <span>Name</span>
        <input type="text"  className="form-control" name="username" onChange={handleForm}></input>
        <span>Email</span>
        <input type="text" className="form-control" name="password" onChange={handleForm}></input>
        <span>Shipping Address</span>
       

        <input type="text" className="form-control"  name="address" onChange={handleForm}></input>
       

        <input className='btn btn-primary'type="submit"></input>
      </form>
      <div>
        
      </div>
      </div>
      </div></div>
      </>
    </div>
    
  )
}

export default App;
