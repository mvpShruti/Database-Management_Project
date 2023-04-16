import './App.css';
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";


import Navbar from './components/Navbar';
import Staff from './pages/staff';

import Home from './pages/home';
import Rooms from './pages/rooms';

import Guests from './pages/guests';

function App() {
  const [staffName, setStaffName] = useState("");
  const [pos, setPos] = useState("");
  const [staffID, setStaffID] = useState(0);
  const [contact, setContact] = useState(0);
  const [accID, setaccID] = useState(0);

  const [deleteID,setStaffDeleteID] = useState(0);


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



  
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route element = {<Home />} path = "/" />
        <Route element = {<Staff />} path = "/staff" />
        <Route element = {<Guests />} path = "/guests" />
        <Route element = {<Rooms />} path = "/rooms" />
      </Routes>
    </div>
  );
}

export default App; 