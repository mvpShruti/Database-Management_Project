import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home";
import Guest from "./pages/Guest";
import AddGuest from "./pages/AddGuest";
import Staff from "./pages/Staff";
import AddStaff from "./pages/AddStaff"
import "./style.css"
import UpdateGuest from "./pages/UpdateGuest";
import UpdateStaff from "./pages/UpdateStaff";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Guest" element={<Guest/>}/> 
        <Route path="/AddGuest" element={<AddGuest/>}/> 
        <Route path="/Staff" element={<Staff/>}/> 
        <Route path="/AddStaff" element={<AddStaff/>}/> 
        <Route path="/update/:guest_id" element={<UpdateGuest/>}/> 
        <Route path="/update/:staff_id" element={<UpdateStaff/>}/> 

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
