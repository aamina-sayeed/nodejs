//when we create api createa labels for API methods //controller folder to interact with db 

//@description Get all contacts
//@route GET /api/contacts
//access public
import asyncHandler from "express-async-handler"
import { Contact } from "../models/contactModel.js"

export const getContacts=asyncHandler(async(req,res)=>{ //async added as mongodb deals with promises 
    //so we need async wait to resolve them 
    //now need to add try cath block to these fns but theres a express middleware 
    //async handler that will deal with async exceptions it passes them to OUR ERRORHANDLER.js
    // res.send("Get all contacts") 
    //res.status(200).json({message:"Get all contacts"})
    const contacts=await Contact.find()
    res.status(200).json(contacts)
   
})

//@description Create New Contact
//@route POST /api/contacts
//access public

export const createContact=asyncHandler(async(req,res)=>{
    
    // res.send("Get all contacts")
    console.log(req.body)
    const {name,email,phone}=req.body
    if(!name||!email||!phone){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    // when we try to access body sent by client to server it shiws ubdefined coz we need
    //body parser to parse the stream of incoming data hence use express middleware 
    //
    const contact=await Contact.create({
        //we have as seen above already destructured req.body as name ,email etc
        //so if key and value are same we can just write key name in ES6
        //so
        name,
        email,
        phone

    })
    res.status(201).json(contact)
   
})


//@description Update contact   =>these are called as labels for api methods
//@route PUT /api/contacts/:id
//access public

export const updateContact=asyncHandler(async(req,res)=>{
    
    const contact=await Contact.findById(req.params.id)
    
    if(!contact){//if contact not found
        res.status(404)
        throw new Error("Contact Not Found")
    }
    
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,//id
        req.body,//new content
        { 
        new:true 
    //{ new : true } will return the modified document rather than the original.
        }
    )

        res.status(200).json(updatedContact)
   
})


//@description Get the contact
//@route GET /api/contacts/:id
//access public

export const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    
    if(!contact){//if contact not found
        res.status(404)
        throw new Error("Contact Not Found")
    }
    
    res.status(200).json(contact)
   
})


//@description Delete the contact
//@route DELETE /api/contacts/:id
//access public

export const deleteContact=asyncHandler(async(req,res)=>{
    
    const contact=await Contact.findByIdAndDelete(req.params.id)
    
    if(!contact){//if contact not found
        res.status(404)
        throw new Error("Contact Not Found")
    }

    // await Contact.remove() //not working

    res.status(200).json(contact)
   
})



