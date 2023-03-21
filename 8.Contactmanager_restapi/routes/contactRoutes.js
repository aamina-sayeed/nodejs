import express,{Router }from "express"
import {getContacts,getContact,createContact,updateContact,deleteContact} from "../controllers/contactController.js"

const app=express()

const router=Router()

router.route("/").get(getContacts)

router.route("/:id").get(getContact)

router.route("/").post(createContact)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)

export default router