import mongoose from "mongoose"

const contactSchema=mongoose.Schema({
    //fields that we want in contact object
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

