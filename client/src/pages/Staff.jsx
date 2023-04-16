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
  return (
    <div>
    <h1>staff</h1>
    <div className='staffs'>
        {staff.map(staff=>(
            <div className='staff'>
                <h2>{staff.ID}</h2>
                <h2>{staff.name}</h2>
                <h3>{staff.position}</h3>
                <h3>{staff.contact_info}</h3>
            </div>
        ))}
    </div>
    <button> <Link to ="/AddStaff"> Add New Staff </Link></button>
    </div>
  )
}

export default Staff
