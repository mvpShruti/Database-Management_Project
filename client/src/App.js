import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home";
import Guest from "./pages/Guest";
import AddGuest from "./pages/AddGuest";
import Staff from "./pages/Staff";
import AddStaff from "./pages/AddStaff"

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

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
