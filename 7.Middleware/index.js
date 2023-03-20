//Application-level middleware
//Third party middleware
//Router-level middleware
//Built-in middleware
//Error-handling middlware

import logger from "morgan" //3rd party middleware
import express, { Router } from "express"
import path from "path"
import { fileURLToPath } from 'url';
import multer from "multer" //3rd party middleware

const upload=multer({dest:"./public/uploads"}) //creates uploads folder upload stuff to server

const app=express()
const router=Router()
const port=5001

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

//Built-in middleware like express.json
app.use(express.json())//to get req.body we get ubdefined so use this to get json

app.use(express.urlencoded({extended:true}))

//built-in middleware
app.use("/static",express.static(path.join(__dirname,"public")))
//this is App-level middleware

const loggerMIddleware=(req,res,next)=>{ //middleware fn 
    console.log(`${new Date()} ---Request [${req.method}] [${req.url}]`)//method shows get put or post or delete etc
    //url shows the route like / or /users etc 
    next()
}

app.use(loggerMIddleware)
//morgan  is third-party middleware
app.use(logger("dev"))//or use combined gives more info




 //to run it app wise and display the console.log stmt with date etc
//this is app-level middleware
//-------------------------Router-level middleware--------------------------------------------------
//coz it starts with router router.use router.route etc

app.use("/api/users",router)//this path contain router

const fakeAuth=(req,res,next)=>{//middleware fn 
    // const authStatus=false //use for checking error-handling mdware
    const authStatus=true
    if(authStatus){
        console.log("User authStatus:",authStatus)
        next()
    }else{
        res.status(401)
        throw new Error("User is not authorized")
    }
}


const getUsers=(req,res)=>{
  res.json({message:"Get all users"})  
}


//BUilt-in middlware check above and here 
const createUser=(req,res)=>{
    console.log("This is request body received from client",req.body)//get undefined 
    //so use built-in middleware
    res.json({message:"Create the user"})  
  }
 
router.use(fakeAuth)

router.route("/").get(getUsers).post(createUser)//rputer-level middleware

//_____________________Error Handling middleware_____________________________________________

//err in form of html page need to change to json format

const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500
    res.status(statusCode)
    switch(statusCode){
        case 401:
            res.json({
                title:"Unauthorized",
                message:err.message
            })
            break
        case 404:
            res.json({
                    title:"Not found",
                    message:err.message
            })
            break 
        case 500:
            res.json({
                    title:"Server Error",
                    message:err.message
             })
            break 
        default:
            break
    }
}
//this part for 3rd party upload using multer
app.use("./upload",upload.single("image"),(req,res,next)=>{
    console.log(req.file,req.body)
    res.send(req.file)
},(err,req,res,next)=>{
    res.static(400).send({err:err.message})
})
//

app.all("*",(req,res)=>{ //for all other routes with astaricks
    res.status(404)
    throw new Error("Route Not Found")
})
app.use(errorHandler)
//_______________________________THird party middleware morgan____________________


app.listen(port,()=>{
    console.log(`Server started at :${port}`)
})//only this will get us route not found error as there are no routes specified

