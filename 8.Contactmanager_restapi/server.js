import express from "express"
import dotenv from "dotenv"
import router from "./routes/contactRoutes.js"
import { errorHandler } from "./middleware/errorHandler.js"
import { connectDb } from "./config/dbConnection.js"
import {userRouter} from "./routes/userRoutes.js"


connectDb()

const app=express()

dotenv.config()

const port=process.env.PORT || 5000



app.use(express.json())

app.use("/api/contacts",router)
app.use("/api/users",userRouter)

 //like body parser
 app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})