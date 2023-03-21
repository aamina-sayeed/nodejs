//when we create api createa labels for API methods //controller folder to interact with db 

//@description Get all contacts
//@route GET /api/contacts
//access public

export const getContacts=(req,res)=>{
    // res.send("Get all contacts")
    res.status(200).json({message:"Get all contacts"})
   
}

//@description Create New Contact
//@route POST /api/contacts
//access public

export const createContact=(req,res)=>{
    
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
    res.status(201).json({message:"Create new contact"})
   
}


//@description Update contact   =>these are called as labels for api methods
//@route PUT /api/contacts/:id
//access public

export const updateContact=(req,res)=>{
    
    res.status(200).json({message:`Update contact for id:${req.params.id}`})
   
}


//@description Get the contact
//@route GET /api/contacts/:id
//access public

export const getContact=(req,res)=>{
 
    res.status(200).json({message:`Get the contact for id: ${req.params.id}`})
   
}


//@description Delete the contact
//@route DELETE /api/contacts/:id
//access public

export const deleteContact=(req,res)=>{
    
    res.status(200).json({message:`Delete contact for id :${req.params.id}`})
   
}



