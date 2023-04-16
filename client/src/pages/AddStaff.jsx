import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddStaff = () => {
    const [addStaff,setAddStaff] = useState({
        name:"",
        position:"",
        contact_info:"",
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setAddStaff((prev) => ({...prev, [e.target.name]: e.target.value }));
    }

    const handleClick = async e =>{
        e.preventDefault()
             try {
                await axios.post("http://localhost:8800/staff", addStaff)
                navigate("/Staff")
            } catch (error) {
                console.log(error)
            }
    }
    

    return (
    <div className ='form'>
      <h1> Add New Staff</h1>
      <input type = "text" placeholder = "Name" onChange={handleChange} name = "name"/>
      <input type = "text" placeholder = "Position" onChange={handleChange} name = "position"/>
      <input type = "text" placeholder = "Contact Info" onChange={handleChange} name = "contact_info" />
    <button onClick = {handleClick}> Add </button>
    </div>
  )
}

export default AddStaff
