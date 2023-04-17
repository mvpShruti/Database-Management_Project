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
  <br />
  <table className='rooms'>
    <thead>
      <tr>
        <th>Number</th>
        <th>Type</th>
        <th>Status</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {room.map(room => (
        <tr className='room' key={room.room_id}>
          <td>{room.room_number}</td>
          <td>{room.room_type}</td>
          <td>{room.room_status}</td>
          <td>
            <button className='update'>
              <Link to={`/updatestatus/${room.room_id}`}>Update Status</Link>
            </button>
          </td>
          <td>
            <button className='delete' onClick={() => handleDelete(room.room_id)}>
              Delete Room
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default Room
