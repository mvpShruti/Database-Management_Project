
import express, { json } from 'express';
const app = express();
import pkg from 'body-parser';
const { urlencoded } = pkg;
import { createPool } from 'mysql2';
import cors from "cors";

app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

const db = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'password',
  database: 'NewHotel',

});

app.post("/create_staff", (req, res) => {
  const staffName = req.body.staffName;
  const staffID = req.body.staffID;
  const pos = req.body.pos;
  const contact = req.body.contact;
  const accID = req.body.accID;
  const sqlInsert = "INSERT INTO staff (staffName, staffID, pos, contact, accID) VALUES (?,?,?,?,?);"
  db.query(
    sqlInsert,
    [staffName, staffID, pos, contact, accID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.post("/update_staff", (req, res) => {
  const id = req.body.updateID;
  const name = req.body.updateName;
  const pos = req.body.updatePos;
  const contact = req.body.updateContact;
  const accID = req.body.updateAccID;

  const sqlInsert = "update staff set (staffName, staffID, pos, contact, accID) VALUES (?,?,?,?,?);"

  db.query(
    sqlInsert,
    [staffName, staffID, pos, contact, accID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});  

app.post("/delete_staff", (req, res) => {
  const deleteID = req.body.deleteID;
  const sqlInsert = "delete from staff where staffID = ?";

  db.query(
    sqlInsert,
    [deleteID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});  

app.post("/create_guest", (req, res) => {
  const guestName = req.body.guestName;
  const guestID = req.body.guestID;
  const address = req.body.address;
  const guestContact = req.body.guestContact;
  const billingID = req.body.billingID;
  const sqlInsert = "INSERT INTO guest (guestName, guestID, address, guestContact, billingID) VALUES (?,?,?,?,?);"
  db.query(
    sqlInsert,
    [guestName, guestID, address, guestContact, billingID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.post("/update_guest", (req, res) => {
  const guestName = req.body.guestName;
  const guestID = req.body.guestID;
  const address = req.body.address;
  const guestContact = req.body.guestContact;
  const billingID = req.body.billingID;

  const sqlInsert = "update guest set (guestName, guestID, address, guestContact, billingID) VALUES (?,?,?,?,?)";

  db.query(
    sqlInsert,
    [guestName, guestID, address, guestContact, billingID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});  

app.post("/delete_guest", (req, res) => {
  const deleteID = req.body.deleteID;
  const sqlInsert = "delete from staff where staffID = ?";

  db.query(
    sqlInsert,
    [deleteID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});  


app.get("/show_rooms", (req, res) => {
  const sqlInsert = "SELECT * from rooms";

  db.query(
    sqlInsert,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

  


app.listen(3001, () => {
    console.log("Server running on port 3001");
});