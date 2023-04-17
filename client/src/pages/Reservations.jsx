import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Reservations = () => {
    const [reservation, setReserve]= useState([])
    useEffect(()=>{
        const fetch_reservations = async () => {
            try {
                const res = await axios.get("http://localhost:8800/reservations")
                setReserve(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch_reservations()
    },[])

    const handleDelete = async (reservation_id) => {
        try {
            await axios.delete("http://localhost:8800/reservations/" + reservation_id)
            window.location.reload()
        } catch (error) {
            console.log(error)
            
        }
    }
    
  return (
<div>
  <h1 className='mainReservations'>Reservations List</h1>
  <br/>
  <button className='addReserve'> <Link to ="/AddReservation"> Add New Reservation </Link></button>
    <br/>
    <br/>
  <table className='reservations'>
    <thead>
      <tr>
        <th>Guest ID</th>
        <th>Check In Date</th>
        <th>Check Out Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {reservation.map(reservation=>(
        <tr className='reservation' key = {reservation.reservation_id}>
          <td>{reservation.guest_id}</td>
          <td>{reservation.check_in_date.split("T")[0]}</td>
          <td>{reservation.check_out_date.split("T")[0]}</td>
          <td>
            <button className ="delete" onClick ={()=>handleDelete(reservation.reservation_id)}> Cancel Reservation</button> 
          </td>
        </tr>
      ))}
    </tbody>
  </table>


    <br></br>
    <br></br>
    <br></br>
    <button className='addReserve'> <Link to ="/AddReservation"> Add New Reservation </Link></button>
    </div>
    

  )
}

export default Reservations
