import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Room = () => {
    const [room, setRoom]= useState([])
    useEffect(()=>{
        const fetch_room = async () => {
            try {
                const res = await axios.get("http://localhost:8800/room")
                setRoom(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch_room()
    },[])

    const handleDelete = async (room_id) => {
        try {
            await axios.delete("http://localhost:8800/room/" + room_id)
            window.location.reload()
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div>
    <h1 className='mainRoom'> Room List </h1>
    <br></br>
    <div className='rooms'>
        {room.map(room=>(
            <div className='room' key = {room.room_id}>
                <h2>Number: {room.room_number}</h2>
                <h2>Type: {room.room_type}</h2>
                <h3>Status: {room.room_status}</h3>
                <button className ="update"> <Link to= {`/updatestatus/${room.room_id}`}>Update Status</Link> </button>
                <button className ="delete" onClick ={()=>handleDelete(room.room_id)}> Delete Room</button> 
            </div>
        ))} 
    </div>
    </div>
  )
}

export default Room
