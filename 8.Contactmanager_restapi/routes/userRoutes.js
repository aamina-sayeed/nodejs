import {Router }from "express"
import { currentUser, loginUser, registerUser } from "../controllers/userController.js"
import validateToken from "../middleware/validateTokenHandler.js"

export const userRouter=Router()

userRouter.post("/register",registerUser)

userRouter.post("/login",loginUser)

userRouter.get("/current",validateToken,currentUser) //making currentuser route private so 
//only people who have validated accesstoken and are logged in can access it

