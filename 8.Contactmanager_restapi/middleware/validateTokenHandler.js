
import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const validateToken=asyncHandler(async(req,res,next)=>{
    
    let token
    let authHeader=req.headers.Authorization || req.headers.authorization
    //this method is for header>create Authorixation header pass value
    //Bearer accessTokenlink (bearer is a keyword here)

    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1]
        
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                res.status(401)
                throw new Error ("User is not authorized")
            }

            // console.log(decoded)

            req.user=decoded.user //putting decoded.ser to request.user 
            next()
        })
         //comparing accesToken and secret key,cb
        if(!token){
            
            res.status(401)
            throw new Error("User is not authorized or token is missing in the request")
        }
    }
    else{
        res.status(401)
        throw new Error("User is not authorized or token is missing in the request")
    }
})


export default validateToken