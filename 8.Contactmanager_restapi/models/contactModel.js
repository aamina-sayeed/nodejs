import mongoose from "mongoose"

const contactSchema=mongoose.Schema({
    
//fields that we want in contact object
//This user_id is to make all contact routes private so 
//only a person who is logged in can do crud operations
    user_id:{
        type:mongoose.Schema.Types.ObjectId, //coz ids are created in mongodb and thats where we have object id
        required:true,
        ref:"User"     //reference of model is User
    },

    name:{
        type:String,
        required:[true,"Please add the contact name"]//required :true means ,adatory to fill the field
    },

    email:{
        type:String,
        required:[true,"Please add the email address"]//required :true means ,adatory to fill the field
    },

    phone:{
        type:String,
        required:[true,"Please add the contact phone number"]//required :true means ,adatory to fill the field
    },

    
    },

    {
        timestamps:true,//to add timestamps
    }
)


export const Contact=mongoose.model("Contact",contactSchema)

