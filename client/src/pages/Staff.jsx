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
    <h1 className='mainStaff'>Staff List</h1>
    <br />
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Contact Info</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {staff.map(staff => (
          <tr className='staff' key={staff.staff_id}>
            <td>{staff.name}</td>
            <td>{staff.position}</td>
            <td>{staff.contact_info}</td>
            <td>
              <button className='update'>
                <Link to={`/updatestaff/${staff.staff_id}`}>Update Staff</Link>
              </button>
            </td>
            <td>
              <button className='delete' onClick={() => handleDelete(staff.staff_id)}>
                Delete Staff
              </button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>

    <br></br>
    <br></br>
    <br></br>
    <button className='addStaff'> <Link to ="/AddStaff"> Add New Staff </Link></button>
    </div>
  )
}

export default Staff
