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
    const q = "INSERT INTO staff (`name`, `position`, `contact_info`) values (?)"
    const values = [
        req.body.name,
        req.body.position,
        req.body.contact_info
    ]
    db.query(q,[values],(error,data)=>{
        if(error) return res.json(error)
        return res.json("staff has been created!")
    })

})

app.delete("/guest/:guest_id",(req,res)=>{
    const guestID = req.params.guest_id;
    const q = "DELETE FROM guest WHERE guest_id = ?"
    db.query(q,[guestID],(error,data)=>{
        if(error) return res.json(error)
        return res.json("Guest has been deleted!")
    })
})

app.delete("/staff/:staff_id",(req,res)=>{
    const staffID = req.params.staff_id;
    const q = "DELETE FROM staff WHERE staff_id = ?"
    db.query(q,[staffID],(error,data)=>{
        if(error) return res.json(error)
        return res.json("Staff has been deleted!")
    })
})

app.put("/guest/:guest_id",(req,res)=>{
    const guestID = req.params.guest_id;
    const q = "UPDATE guest SET `name` = ?, `address` = ?, `contact_info`= ? WHERE guest_id = ? "
    const values = [
        req.body.name,
        req.body.address,
        req.body.contact_info
    ]
    
    db.query(q,[...values, guestID],(error,data)=>{
        if(error) return res.json(error)
        return res.json("guest has been updated!")
    })

})

app.put("/staff/:staff_id",(req,res)=>{
    const staffID = req.params.staff_id;
    const q = "UPDATE staff SET `name` = ?, `position` = ?, `contact_info`= ? WHERE staff_id = ? "
    const values = [
        req.body.name,
        req.body.position,
        req.body.contact_info
    ]
    
    db.query(q,[...values, staffID],(error,data)=>{
        if(error) return res.json(error)
        return res.json("staff has been updated!")
    })

})

app.listen(8800,()=>{
    console.log("hello2")
})