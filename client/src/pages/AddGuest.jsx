import React from 'react'
import { useState } from 'react';

const AddGuest = () => {
    const [addGuest,setAddGuest] = useState({
        name:"",
        address:"",
        contact_info:"",
    });

    const handleChange = (e) =>{
        setAddGuest((prev) => ({...prev, [e.target.name]: e.target.value }));
        console.log(addGuest)
    }
  return (
    <div className ='form'>
      <h1> Add New Guest</h1>
      <input type = "text" placeholder = "Name" onChange={handleChange} name = "name"/>
      <input type = "text" placeholder = "Address" onChange={handleChange} name = "address"/>
      <input type = "text" placeholder = "Contact Info" onChange={handleChange} name = "contact_info" />
    </div>
  )
}

export default AddGuest
