import React from 'react'

import { useEffect, useState } from 'react';

export default function Customercare() {


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
       
      
     <>
    
    <div >
      
  <div className="info-container d-flex flex-column align-items-center justify-content-center">
    <div className="info-item d-flex">
     <form onSubmit={handleSubmit}>
        <span>Name</span>
        <input type="text"  className="form-control" name="username" onChange={handleForm}></input>
        <span>Email</span>
        <input type="text" className="form-control" name="password" onChange={handleForm}></input>
        <span>Message</span>
       

        <input type="text" className="form-control"  name="address" onChange={handleForm}></input>
       

        <input className='btn btn-primary'type="submit"></input>
      </form>
      <div>
        <ul>
          {users.map(user=><li key={user._id}>{user.username},{user.password},{user.address}</li>)}
        </ul>
      </div>
      </div>
      </div></div>
      </>
    </div>
    
  )
  

}
