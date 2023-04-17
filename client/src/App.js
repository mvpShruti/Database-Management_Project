import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home";
import Guest from "./pages/Guest";
import AddGuest from "./pages/AddGuest";
import Staff from "./pages/Staff";
import AddStaff from "./pages/AddStaff"
import "./style.css"
import UpdateGuest from "./pages/UpdateGuest";
import UpdateStaff from "./pages/UpdateStaff";
import Reservations from "./pages/Reservations";
import AddReservation from "./pages/AddReservation";
import Room from "./pages/Room";
import UpdateStatus from "./pages/UpdateStatus";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Guest" element={<Guest/>}/> 
        <Route path="/AddGuest" element={<AddGuest/>}/> 
        <Route path="/Staff" element={<Staff/>}/> 
        <Route path="/AddStaff" element={<AddStaff/>}/> 
        <Route path="/update/:guest_id" element={<UpdateGuest/>}/> 
        <Route path="/updatestaff/:staff_id" element={<UpdateStaff/>}/> 
        <Route path="/Reservations" element={<Reservations/>}/> 
        <Route path="/AddReservation" element={<AddReservation/>}/> 
        <Route path="/Room" element={<Room/>}/> 
        <Route path="/updatestatus/:room_id" element={<UpdateStatus/>}/> 

      </Routes>
     </BrowserRouter>
    </div>
    
  );
}

export default App;
