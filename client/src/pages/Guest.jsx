import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Guest = () => {
    const [guest, setGuest]= useState([])
    useEffect(()=>{
        const fetch_guests = async () => {
            try {
                const res = await axios.get("http://localhost:8800/guest")
                setGuest(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch_guests()
    },[])

    const handleDelete = async (guest_id) => {
        try {
            await axios.delete("http://localhost:8800/guest/" + guest_id)
            window.location.reload()
        } catch (error) {
            console.log(error)
            
        }
    }
//   return (
//     <div>
//     <h1 className='mainGuest'> Guest List </h1>
//     <br></br>
//     <div className='guests'>
//         {guest.map(guest=>(
//             <div className='guest' key = {guest.guest_id}>
//                 <h2>{guest.name}</h2>
//                 <h3>{guest.address}</h3>
//                 <h3>{guest.contact_info}</h3>
//                 <button className ="update"> <Link to= {`/update/${guest.guest_id}`}>Update Guest</Link> </button>
//                 <button className ="delete" onClick ={()=>handleDelete(guest.guest_id)}> Delete Guest</button>
//             </div>
//         ))}
//     </div>
//     <br></br>
//     <br></br>
//     <br></br>
//     <button className='addGuest'> <Link to ="/AddGuest"> Add New Guest </Link></button>
//     </div>
//   )
return (
    <div>
      <h1 className="mainGuest">Guest List</h1>
      <br />

      <button className="addGuest">
        <Link to="/AddGuest">Add New Guest</Link>
      </button>
        <br></br>
        <br></br>
      <table className="guests">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Contact Info</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {guest.map((guest) => (
            <tr key={guest.guest_id}>
              <td>{guest.name}</td>
              <td>{guest.address}</td>
              <td>{guest.contact_info}</td>
              <td>
                <button className="update">
                  <Link to={`/update/${guest.guest_id}`}>Update Guest</Link>
                </button>
              </td>
              <td>
                <button className="delete" onClick={() => handleDelete(guest.guest_id)}>
                  Delete Guest
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Guest
