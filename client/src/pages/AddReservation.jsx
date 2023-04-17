// // import React from 'react'
// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from "axios"
// // import moment from "moment";

// // const AddReservation = () => {
// //     const [addReservation,setAddReservation] = useState({
// //         check_in_date:"",
// //         check_out_date:""
        
// //     });

// //     const navigate = useNavigate()

// //     const handleChange = (e) =>{
// //         const { name, value } = e.target;
// //         if (name === 'check_in_date' || name === 'check_out_date') {
// //           setAddReservation((prev) => ({
// //             ...prev,
// //             [name]: moment(value).format('YYYY-MM-DD'),
// //           }));
// //         } else {
// //           setAddReservation((prev) => ({ ...prev, [name]: value }));
// //         }
// //       };
    

// //     const handleClick = async e =>{
// //         e.preventDefault()
// //              try {
// //                 await axios.post("http://localhost:8800/reservations", addReservation)
// //                 navigate("/Reservations")
// //             } catch (error) {
// //                 console.log(error)
// //             }
// //     }

// //   return (
// //     <div className ='form' >
// //       <h1> Add New Reservation</h1>
// //       <input type="date" placeholder="CheckIn Date" onChange={handleChange} name="check_in_date" value={moment(addReservation.check_in_date).format('YYYY-MM-DD')}/>
// //       <input type="date" placeholder="CheckOut Date" onChange={handleChange} name="check_out_date" value={moment(addReservation.check_out_date).format('YYYY-MM-DD')}/>


// //       <button onClick = {handleClick}> Add Reservation </button>
// //     </div>
// //   )
// // }

// // export default AddReservation
// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios"
// import moment from "moment";

// const AddReservation = () => {
//   const [addReservation, setAddReservation] = useState({
//     check_in_date: "",
//     check_out_date: ""
//   });

//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'check_in_date' || name === 'check_out_date') {
//       setAddReservation((prev) => ({
//         ...prev,
//         [name]: moment(value).format('YYYY-MM-DD'),
//       }));
//     } else {
//       setAddReservation((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleClick = async e => {
//     e.preventDefault()
//     try {
//       await axios.post("http://localhost:8800/reservations", addReservation)
//       navigate("/Reservations")
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div className='form'>
//       <h1> Add New Reservation</h1>
//       <input type="date" placeholder="CheckIn Date" onChange={handleChange} name="check_in_date" value={moment(addReservation.check_in_date).format('YYYY-MM-DD')} />
//       <input type="date" placeholder="CheckOut Date" onChange={handleChange} name="check_out_date" value={moment(addReservation.check_out_date).format('YYYY-MM-DD')} />

//       <button onClick={handleClick}> Add Reservation </button>
//     </div>
//   );
// };

// export default AddReservation;
