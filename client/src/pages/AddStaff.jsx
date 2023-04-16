import React from 'react'
import { useState } from 'react';

const AddStaff = () => {
    const [addStaff,setAddStaff] = useState({
        ID:"",
        name:"",
        position:"",
        contact_info:"",
    });

    const handleChange = (e) =>{
        setAddStaff((prev) => ({...prev, [e.target.name]: e.target.value }));
    }
  return (
    <div className ='form'>
      <h1> Add New Staff</h1>
      <input type = "Number" placeholder = "ID" onChange={handleChange} name = "ID"/>
      <input type = "text" placeholder = "Name" onChange={handleChange} name = "name"/>
      <input type = "text" placeholder = "Position" onChange={handleChange} name = "position"/>
      <input type = "text" placeholder = "Contact Info" onChange={handleChange} name = "contact_info" />
    </div>
  )
}

export default AddStaff
