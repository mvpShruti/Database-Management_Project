import React from 'react'
import { useState, useEffect} from 'react';
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
        // console.log(upRoom)
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
    useEffect(() => {
      console.log(upRoom);
    },[upRoom]);

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

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const UpdateStatus = () => {
//   const { roomId } = useParams();
//   const [room, setRoom] = useState(null);
//   const [roomStatus, setRoomStatus] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRoom = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8800/room/${roomId}`);
//         setRoom(response.data);
//         setRoomStatus(response.data.room_status);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchRoom();
//   }, [roomId]);

//   const handleStatusChange = (event) => {
//     setRoomStatus(event.target.value);
//   };

//   const handleStatusUpdate = async () => {
//     try {
//       const updatedRoom = {
//         ...room,
//         room_status: roomStatus,
//       };

//       await axios.put(`http://localhost:8800/room/${roomId}`, updatedRoom);
//       navigate('/Room');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!room) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='form'>
//       <h1>Update Status of Room {room.room_number}</h1>
//       <br />
//       <input type='text' placeholder='Status' value={roomStatus} onChange={handleStatusChange} />
//       <br />
//       <br />
//       <br />
//       <button className='formButton' onClick={handleStatusUpdate}>
//         Update Status
//       </button>
//     </div>
//   );
// };

// export default UpdateStatus;

