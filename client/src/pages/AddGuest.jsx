import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const AddGuest = () => {
    const [addGuest,setAddGuest] = useState({
        name:"",
        address:"",
        contact_info:"",
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setAddGuest((prev) => ({...prev, [e.target.name]: e.target.value }));
        console.log(addGuest)
    }

    const handleClick = async e =>{
        e.preventDefault()
             try {
                await axios.post("http://localhost:8800/guest", addGuest)
                navigate("/Guest")
            } catch (error) {
                console.log(error)
            }
    }

  return (
    <div className ='form' >
      <h1> Add New Guest</h1>
     <h3> Name :</h3><input type = "text" placeholder = "Name" onChange={handleChange} name = "name"/>
     <h3> Address :</h3><input type = "text" placeholder = "Address" onChange={handleChange} name = "address"/>
     <h3> Contact Info :</h3><input type = "text" placeholder = "Contact Info" onChange={handleChange} name = "contact_info" />
     <br></br>
     <br></br>
     <br></br>
      <button className = 'addGuest' onClick = {handleClick}> Add Guest </button>
    </div>
  )
}

export default AddGuest
