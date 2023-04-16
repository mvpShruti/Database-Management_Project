import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"

const UpdateStaff = () => {
    const [upStaff,setUpStaff] = useState({
        name:"",
        position:"",
        contact_info:"",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const staffID = parseInt(location.pathname.split("/")[2])

    const handleChange = (e) =>{
        setUpStaff((prev) => ({...prev, [e.target.name]: e.target.value }));
        console.log(upStaff)
    }

    const handleClick = async e =>{
        e.preventDefault()
             try {
                await axios.put("http://localhost:8800/staff/" + staffID, upStaff)
                navigate("/Staff")
            } catch (error) {
                console.log(error)
            }
    }

  return (
    <div className ='form' >
      <h1> Update Staff Details</h1>
      <input type = "text" placeholder = "Name" onChange={handleChange} name = "name"/>
      <input type = "text" placeholder = "Position" onChange={handleChange} name = "position"/>
      <input type = "text" placeholder = "Contact Info" onChange={handleChange} name = "contact_info" />
      <button className = "formButton" onClick = {handleClick}> Update Staff </button>
    </div>
  )
}

export default UpdateStaff

