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
    <br></br>
    <div className='reservations'>
        {reservation.map(reservation=>(
            <div className='reservation' key = {reservation.reservation_id}>
                <h3>Guest ID: {reservation.guest_id}</h3>
                <h3>Check In Date: {reservation.check_in_date.split("T")[0]}</h3>
                <h3>Check Out Date: {reservation.check_out_date.split("T")[0]}</h3>
                <button className ="delete" onClick ={()=>handleDelete(reservation.reservation_id)}> Cancel Reservation</button> 
            </div>
        ))}
    </div>
    <br></br>
    <br></br>
    <br></br>
    <button className='addReserve'> <Link to ="/AddReservation"> Add New Reservation </Link></button>
    </div>
  )
}

export default Reservations
