//creating http server

import http from "http"
import getReq from "./methods/get-request.js"
import putReq from "./methods/put-request.js"
import postReq from "./methods/post-request.js"
import delReq from "./methods/delete-request.js"
import movies from "./data/movies.json" assert { type: "json" }
//import dotenv from "dotenv"

//dotenv.config()
// const PORT=process.env.PORT || 5001
const PORT=8000
const server=http.createServer((req,res)=>{
    req.movies=movies
    switch(req.method){
        
        case "GET":
        getReq(req,res)
        break
        case "POST":
        postReq(req,res)
        break
        case "PUT":
        putReq(req,res)
        break
        case "DELETE":
        delReq(req,res)
        break
        default:
        res.statusCode=200
        res.setHeader("Content-Type","applications/json")
        res.write(JSON.stringify({title:"Not Found",message:"Route Not Found"}))
        res.end()
    }

    
})

server.listen(PORT,()=>{
    console.log(`Server started on port:${PORT}`)
})


