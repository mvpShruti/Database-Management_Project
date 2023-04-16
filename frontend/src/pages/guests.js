import '../App.css';
import Axios from 'axios'
import React, { useEffect, useState } from "react"
import BasicTable from '../components/BasicTable.js'
import {guest_columns} from '../components/guest_columns.js'
//import 'bootstrap/dist/css/bootstrap.css';

const Guests = () => {
    const [guestName, setGuestName] = useState("");
    const [guestContact, setGuestContact] = useState(0);
    const [guestID, setGuestID] = useState(0);
    const [address, setAddress] = useState("");
    const [billingID, setBillingID] = useState(0);
    const [deleteID,setGuestDeleteID] = useState(0);
    const [updateID, setUpdateID] = useState("");
    const [updateAddress, setUpdateAddress] = useState("");
    const [updateName, setUpdateName] = useState("");
    const [updateContact, setUpdateContact] = useState(0);
    const [updateBillingID, setUpdateBillingID] = useState(0);

    const addGuest = () => {
        console.log("In addGuest() function")
        Axios.post("http://localhost:3001/create_acc", {
            guestID : guestID,
            guestName: guestName,
            address : address,
            guestContact : guestContact,
            billiingID : billingID


        }).then(() => {
            console.log("successfully added!");
        });
        document.getElementById("addName").value = "";
        document.getElementById("addAddress").value = "";
        document.getElementById("addID").value = "";
        document.getElementById("addContact").value = "";
        document.getElementById("addBillingID").value = "";
    };

    const deleteMember = () => {
        Axios.post("http://localhost:3001/delete_acc", {
            deleteID: deleteID,
        }).then(() => {
            alert("Account deleted!");
            console.log("successfully deleted");
        });
        document.getElementById("delID").value = "";

    };



    const updateGuest = () => {

        Axios.post("http://localhost:3001/update_acc", {
            updateID: updateID,
            updateName: updateName,
            updateAddress: updateAddress,
            updateContact : updateContact,
            updateBillingID: updateBillingID
        }).then(() => {
            alert("Account deleted!");
            console.log("successfully deleted");
        });
        document.getElementById("updateID").value = "";
        document.getElementById("updateName").value = "";
        document.getElementById("updateAddress").value = "";
        document.getElementById("updateContact").value = "";
        document.getElementById("updateBillingID").value = "";

    };
    

    return(
        <div>
            <h1>Guest Details</h1>
            <h3>Add Guest</h3>

            <div className="Add">
                <br></br>
                <label>Name: </label>
                <input
                type = "text"
                name = "guestName"
                id = "addName"
                onChange={(event) => {
                    setGuestName(event.target.value);
                }}
                />

                <br></br>
                <button onClick={addGuest}>Add Guest</button>
             </div> 


            <div className='Delete'>
                <br></br>
                <h3>Delete Staff</h3>
                <label>Staff ID: </label>
                <input
                    type = "number"
                    name = "deleteID"
                    id = "deleteID"
                    onChange={(event) => {
                        setStaffDeleteID(event.target.value);
                    }}
                />
                <br></br>
                <button onClick={deleteMember}>Delete Staff</button>
                <br></br>
            </div>  

            <div className='Update'>
                <br></br>
                <h3>Update Details</h3>
                <label>Guest ID: </label>
                <input
                    type = "number"
                    name = "updateID"
                    id = "updateID"
                onChange={(event) => {
                    setUpdateID(event.target.value);
                }}
                />
                <br></br>
                <label>New Guest name: </label>
                <input
                    type = "text"
                    name = "updateName"
                    id = "updateName"
                onChange={(event) => {
                    setUpdateName(event.target.value);
                }}
                />
                <br></br>
                <label>New Address: </label>
                <input
                    type = "text"
                    name = "updateAddress"
                    id = "updateAddress"
                onChange={(event) => {
                    setUpdateAddress(event.target.value);
                }}
                />
                
                <br></br>
                <label>New Contact: </label>
                <input
                    type = "number"
                    name = "updateContact"
                    id = "updateContact"
                onChange={(event) => {
                    setUpdateContact(event.target.value);
                }}
                />

                <br></br>
                <label>New Billing ID: </label>
                <input
                    type = "number"
                    name = "updateBillingID"
                    id = "updateBillingID"
                onChange={(event) => {
                    setUpdateBillingID(event.target.value);
                }}
                />
                <br></br>
                <button onClick={updateGuest}>Update Details</button>
            </div>
        </div>
    );
};

export default Guests;