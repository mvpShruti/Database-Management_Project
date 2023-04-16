import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"

const UpdateGuest = () => {
    const [upGuest,setUpGuest] = useState({
        name:"",
        address:"",
        contact_info:"",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const guestID = parseInt(location.pathname.split("/")[2])

    const handleChange = (e) =>{
        setUpGuest((prev) => ({...prev, [e.target.name]: e.target.value }));
        console.log(upGuest)
    }

    const handleClick = async e =>{
        e.preventDefault()
             try {
                await axios.put("http://localhost:8800/guest/" + guestID, upGuest)
                navigate("/Guest")
            } catch (error) {
                console.log(error)
            }
    }

  return (
    <div className ='form' >
      <h1> Update Guest Details</h1>
      <input type = "text" placeholder = "Name" onChange={handleChange} name = "name"/>
      <input type = "text" placeholder = "Address" onChange={handleChange} name = "address"/>
      <input type = "text" placeholder = "Contact Info" onChange={handleChange} name = "contact_info" />
      <button className = "formButton" onClick = {handleClick}> Update Guest </button>
    </div>
  )
}

export default UpdateGuest

