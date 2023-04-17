import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"

const UpdateStatus= () => {
    const [upRoom,setUpRoom] = useState({
        // type:"",
        room_status:""
    });

    const navigate = useNavigate()
    const location = useLocation()

    const roomID = parseInt(location.pathname.split("/")[2])

    const handleChange = (e) =>{
        setUpRoom((prev) => ({...prev, [e.target.name]: e.target.value }));
        console.log(upRoom)
    }

    const handleClick = async e =>{
        e.preventDefault()
             try {
                await axios.put("http://localhost:8800/room/" + roomID, upRoom)
                navigate("/Room")
            } catch (error) {
                console.log(error)
            }
    }

  return (
    <div className ='form' >
      <h1> Update Status of Room</h1>
      <br></br>
      {/* <input type = "text" placeholder = "Type" onChange={handleChange} name = "type"/> */}
      <input type = "text" placeholder = "Status" onChange={handleChange} name = "room_status"/>
      <br></br>
      <br></br>
      <br></br>
      <button className = "formButton" onClick = {handleClick}> Update Status </button>
    </div>
  )
}

export default UpdateStatus

