import mysql from "mysql2"
import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:"HAHANewHotel"

})
app.get("/",(req,res)=>{
    res.json("this is backend")
})
app.get("/guest",(req,res)=>{
    const q = "SELECT * FROM guest"
    db.query(q,(error,data)=>{
        if(error) return res.json(error)
        return res.json(data)
    })
})
app.post("/guest",(req,res)=>{
    const q = "INSERT INTO guest (`name`, `address`, `contact_info`) values (?)"
    const values = [
        req.body.name,
        req.body.address,
        req.body.contact_info
    ]
    db.query(q,[values],(error,data)=>{
        if(error) return res.json(error)
        return res.json("guest has been created!")
    })

})
app.get("/staff",(req,res)=>{
    const q = "SELECT * FROM staff"
    db.query(q,(error,data)=>{
        if(error) return res.json(error)
        return res.json(data)
    })
})
app.post("/staff",(req,res)=>{
    const q = "INSERT INTO staff (`ID`,`name`, `position`, `contact_info`) values (?)"
    const values = [
        req.body.ID,
        req.body.name,
        req.body.position,
        req.body.contact_info
    ]
    db.query(q,[values],(error,data)=>{
        if(error) return res.json(error)
        return res.json("staff has been created!")
    })

})
app.listen(8800,()=>{
    console.log("hello2")
})