import '../App.css';
import Axios from 'axios'
import React, { useEffect, useState } from "react"
import BasicTable from '../components/BasicTable.js'
import {staff_columns} from '../components/staff-columns.js'
//import 'bootstrap/dist/css/bootstrap.css';

const Staff = () => {
    const [staffName, setStaffName] = useState("");
    const [pos, setPos] = useState("");
    const [staffID, setStaffID] = useState(0);
    const [contact, setContact] = useState(0);
    const [accID, setaccID] = useState(0);
    const [deleteID,setStaffDeleteID] = useState(0);
    const [updateID, setUpdateID] = useState("");
    const [updatePos, setUpdatePos] = useState("");
    const [updateName, setUpdateName] = useState("");
    const [updateContact, setUpdateContact] = useState(0);
    const [updateAccID, setUpdateAccID] = useState(0);

    const addMember = () => {
        console.log("In addMember() function")

        Axios.post("http://localhost:3001/create_acc", {
            staffID : staffID,
            staffName: staffName,
            pos : pos,
            contact : contact,
            accID : accID


        }).then(() => {
            console.log("successfully added!");
        });
        document.getElementById("addName").value = "";
        document.getElementById("addPos").value = "";
        document.getElementById("addID").value = "";
        document.getElementById("addContact").value = "";
        document.getElementById("addAccID").value = "";
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


    const updateMember = () => {

        Axios.post("http://localhost:3001/update_acc", {
            updateID: updateID,
            updateName: updateName,
            updatePos: updatePos,
            updateContact : updateContact,
            updateAccID: updateAccID
        }).then(() => {
            alert("Account deleted!");
            console.log("successfully deleted");
        });
        document.getElementById("updateID").value = "";
        document.getElementById("updateName").value = "";
        document.getElementById("updatePos").value = "";
        document.getElementById("updateContact").value = "";
        document.getElementById("updateAccID").value = "";

    };
    

    return(
        <div>
            <h1>Staff Details</h1>
            <h3>Add Staff</h3>

            <div className="Add">
                <br></br>
                <label>Name: </label>
                <input
                type ="text"
                name = "staffName"
                id = "addName"
                onChange={(event) => {
                    setStaffName(event.target.value);
                }}
                />

                <br></br>
                <button onClick={addMember}>Add Member</button>
             </div> 



            <div className='Delete'>
                <br></br>
                <h3>Delete Staff</h3>
                <label>Staff ID: </label>
                <input
                    type = "number"
                    name = "deleteID"
                    id = "delID"
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
                <label>Staff ID: </label>
                <input
                    type = "number"
                    name = "updateID"
                    id = "updateID"
                onChange={(event) => {
                    setUpdateID(event.target.value);
                }}
                />
                <br></br>
                <label>New member name: </label>
                <input
                    type = "text"
                    name = "updateName"
                    id = "updateName"
                onChange={(event) => {
                    setUpdateName(event.target.value);
                }}
                />
                <br></br>
                <label>New position: </label>
                <input
                    type = "text"
                    name = "updatePos"
                    id = "updatePos"
                onChange={(event) => {
                    setUpdatePos(event.target.value);
                }}
                />

                <br></br>
                <label>New Contatc: </label>
                <input
                    type = "number"
                    name = "updateContact"
                    id = "updateContact"
                onChange={(event) => {
                    setUpdateContact(event.target.value);
                }}
                />

                <br></br>
                <label>New Access ID: </label>
                <input
                    type = "number"
                    name = "updateAccID"
                    id = "updateAccID"
                onChange={(event) => {
                    setUpdateAccID(event.target.value);
                }}
                />
                <br></br>
                <button onClick={updateMember}>Update Details</button>
            </div>
        </div>
    );
};

export default Staff;