import express,{Router }from "express"
import {getContacts,getContact,createContact,updateContact,deleteContact} from "../controllers/contactController.js"
import validateToken from "../middleware/validateTokenHandler.js"

const app=express()

const router=Router()

router.use(validateToken)//make ALL crud operations or ALL routes HERE as priavate 
//It only gives access if jsonwebtoken is matching r validated 
//so onlhy a logged in erson whoi can get accesstoken can use these operations

//To make particular route only private checkuserRoutes.js

router.route("/").get(getContacts)

router.route("/:id").get(getContact)

router.route("/").post(createContact)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)

export default router