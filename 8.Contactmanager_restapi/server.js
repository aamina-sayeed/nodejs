import express from "express"
import dotenv from "dotenv"
import router from "./routes/contactRoutes.js"

const app=express()

dotenv.config()

const port=process.env.PORT || 5000


app.use(express.json())

app.use("/api/contacts",router)
 //like body parser

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})