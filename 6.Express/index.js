import express from "express"

const port=3001

const app=express()

app.get("/",(req,res)=>{
    // res.send("Hello World")
    res.json({message:"This is home page"})
})
app.get("/users",(req,res)=>{
    // res.send("Hello World")
    res.json({message:"GEt all the users"})
})

app.get("/users/:id",(req,res)=>{
    // res.send("Hello World")
    res.json({message:`GEt user with ID ${req.params.id}`})
})

app.post("/users/",(req,res)=>{
    // res.send("Hello World")
    res.json({message:`Create new user `})
})

app.put("/users/:id",(req,res)=>{
    // res.send("Hello World")
    res.json({message:`Update or put user with ID ${req.params.id} `})
})
app.delete("/users/:id",(req,res)=>{
    // res.send("Hello World")
    res.json({message:`Delete user with ID ${req.params.id} `})
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})//to run express app go to pacakge.json>nodemon index.js