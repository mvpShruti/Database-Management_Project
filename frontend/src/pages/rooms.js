import '../App.css';
import Axios from 'axios'
import React, { useEffect, useState } from "react"
import BasicTable from '../components/BasicTable.js'
import {room_columns} from '../components/room-columns.js'
import {reserved_columns} from '../components/reserved-columns.js'


const Rooms = () => {
    const [showRoomsName, setShowRoomsName] = useState([]);
    const [showReservations, setShowReservations] = useState([]);
    const [delRoomNumber, setDelRoomNumber] = useState(0);
    const [delGuestID, setDelGuestID] = useState(0); 
    const [delresID, setDelResID] = useState(0);


    const showRooms = () =>{
        Axios.get("http://localhost:3001/show_rooms")
        .then((response) => {
            setShowRoomsName(response.data);
        });
    }

    const displayReservations = () =>{
        Axios.get("http://localhost:3001/show_reservations")
        .then((response) => {
            setShowReservations(response.data);
            console.log(response);
        });
    }


    const deleteReservations = () =>{
        Axios.post("http://localhost:3001/delete_reservations",{
            roomNumber:delRoomNumber,
            resID:delresID,
            checkIn:delCheckIn,
            checkOut:delCheckOut,
            guestID: delGuestID
        }).then((response) => {
            console.log("deleted");
        })
        document.getElementById("delRoomBox").value = "";
        document.getElementById("delResBox").value = "";
        document.getElementById("delGuestIDBox").value = "";
    };

    const showAllRooms = React.useMemo(()=>showRoomsName);
    const showAllReserved = React.useMemo(()=>showReservations);

    return(
        <div>
            <body>
                <h1>Room Booking</h1>
                onLoad={showRooms()}
                <BasicTable columns={room_columns} data= {showAllRooms}/>
    
            
                
                
                <br></br>
                <h3>List of Reservations</h3>
                <br></br>
                <BasicTable columns={reserved_columns} data= {showAllReserved}/>
                <br></br>
                <button onClick={displayReservations}>Show All reservations</button>
                <br></br>
                <br></br>
                <h3>Cancel Reservation</h3>
                <br></br>
                <label> Guest ID: </label>
                <input
                    type = "text"
                    name = "guestID"
                    id = "delGuestIDBox"
                    onChange={(event) => {
                        setDelGuestID(event.target.value);
                    }}
                />
                <br></br>
                <label>Room Number to be cancelled: </label>
                <input
                    type = "text"
                    name = "roomNumber"
                    id = "delRoomBox"
                    onChange={(event) => {
                        setDelRoomID(event.target.value);
                    }}
                />
                <br></br>
                <label> Reservation ID to be cancelled:</label>
                <input
                    type = "text"
                    name = "resID"
                    id = "delResBox"
                    onChange={(event) => {
                        setDelResID(event.target.value);
                    }}
                />
                <br></br>
                <br></br>
                <button onClick={deleteReservations}>Delete reservation</button>
                <br></br>
                <br></br>
                <br></br>
            </body>
        </div>

    );
};

export default Rooms;