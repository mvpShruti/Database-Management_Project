import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Staff = () => {
    const [staff, setStaff]= useState([])
    useEffect(()=>{
        const fetch_staff = async () => {
            try {
                const res = await axios.get("http://localhost:8800/staff")
                setStaff(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch_staff()
    },[])

    const handleDelete = async (staff_id) => {
        try {
            await axios.delete("http://localhost:8800/staff/" + staff_id)
            window.location.reload()
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div>
    <h1 className='mainStaff'> Staff List </h1>
    <br></br>
    <div className='staffs'>
        {staff.map(staff=>(
            <div className='staff' key = {staff.staff_id}>
                <h2>{staff.name}</h2>
                <h3>{staff.position}</h3>
                <h3>{staff.contact_info}</h3>
                <button className ="update"><Link to= {`/updatestaff/${staff.staff_id}`}>Update Staff</Link></button>
                <button className ="delete" onClick ={()=>handleDelete(staff.staff_id)}> Delete Staff</button>
            </div>
        ))}
    </div>
    <br></br>
    <br></br>
    <br></br>
    <button className='addStaff'> <Link to ="/AddStaff"> Add New Staff </Link></button>
    </div>
  )
}

export default Staff
