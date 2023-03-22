import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    
    username:{
        type:String,
        required:[true,"Please add the username"]
    },
    email:{
        type:String,
        required:[true,"Please add the user email address"],
        unique:[true,"Email address already taken "],
        //uniqueemail address 
        //so no user can register with same email id again 
    },
    password:{
        type:String,
        required:[true,"Please add the user password"]
    }
  },
    {
    timestamps:true,
    }
)

export const User=mongoose.model("User",userSchema)