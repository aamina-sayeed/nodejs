//when we create api createa labels for API methods //controller folder to interact with db 

//@description Register a user
//@route GET /api/users/register
//access public

import dotenv from "dotenv"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import {User} from "../models/userModel.js"



dotenv.config()

export const registerUser=asyncHandler(async(req,res)=>{ //async added as mongodb deals with promises 
    //so we need async wait to resolve them 
    //now need to add try cath block to these fns but theres a express middleware 
    //async handler that will deal with async exceptions it passes them to OUR ERRORHANDLER.js
    // res.send("Get all contacts") 
    //res.status(200).json({message:"Get all contacts"})
    const {username,email,password}=req.body
    
    if(!username||!email||!password){
        res.status(400)
        throw new Error("All filelds are mandatory")
    }
    
    //check if user already exists or not using below code
    
    const userAvailabale=await User.findOne({email})
    //Fetches the first document that matches the filter
    
    if(userAvailabale){
        res.status(400)
        throw new Error("User already registered")
    }

    //we cannot store raw passowrd in our db 

    //Hash password

    const hashedPassword=await bcrypt.hash(password,10)//10 is salt rounds
    // console.log("Hashed Password:",hashedPassword)

    const user=await User.create({
        username,
        email,
        password:hashedPassword
    })
    console.log("User created succesfully")
    if(user){
        res.status(201)
        res.json({_id:user.id,email:user.email})
    }else{
        res.status(400)
        throw new Error("User data is not valid")
    }

   res.json({message:"Register the User"})
   
})

//___________________________LOGIN____________________________________________________

//@description Login the User
//@route GET /api/users/login
//access public

export const loginUser=asyncHandler(async(req,res)=>{
    //we need to check email and password in db then send jsonwebtoken
    const {email,password}=req.body
    
    if(!email||!password){
        res.status(400)
        throw new Error ("All fields are mandatory")
    }

    const user=await User.findOne({email})//check if user present or not by comparing email
    
    //compare password with hashedpassword

    if(user && (await bcrypt.compare(password,user.password))){
        //now try to provide jsonweb token 
        
        const accessToken=jwt.sign({
            //cannot directly pass user as it contains hashedpassword

            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15m"}
        )
        
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("Email or password not valid")
    }
   
    // res.json({message:"Login User"})

})

//@description Current User
//@route GET /api/users/current
//access PRIVATE METHOD AS ONLY LOGGED IN USER CAN GET THEIR USER INFO

export const currentUser=asyncHandler(async(req,res)=>{
    //we put user info fromdecode json web token in req.user in validateToken middleware
    //so all current user info there only

    res.json(req.user)
    console.log(req.user)
    // res.json({message:"Current User Information"})


})