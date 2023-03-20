//4 diff ways to handle errors:

import { customError } from "./customError.js"

//1>create error object and use throw to throw the error 

// const error=new Error("SOmething went wrong")
// console.log(error.stack)//the whole stack of where it went wrong
// console.log(error.message)//shows just the message

//using throw the exception

// throw new  Error (" I am error Object")

//custom error object

// import {customError} from "./customError.js"

// throw new customError("This is custom error object")

//--------------------------------------------------------------------
//2)try and catch

// try{
    
//     doSome()

// }catch(e){
//     console.log("Error occured!!!!")
//     console.log(e)
// }

function doSome(){
 
    const data=fetch("localhost:300/api")
    console.log("I am from doSome function")
    //const data="I ma frpm dosoemthing"
}

//-------------------------------------------------------------------
//3)uncaught Exception

//can use process core nodejs module -we didnt catch any exceptioon so it comes under uncaught exception


// process.on("uncaughtException",(err)=>{
//     console.log("This is an uncaught Exception ",err)
//     process.exit(1)
// })

// doSome()
//-------------------------------------------------------------------
//4)Exception with promises

// const promise=new Promise((resolve,reject)=>{
//     if(true){
//         resolve(doSome())
//     }
//     else{
//         reject(doSome())
//     }
// })

// promise
// .then((val)=>{
//     console.log(val)
// })
// .catch((err)=>{
//     console.log("Error Ocurred")
//     console.log(err)
// })

//---------------------------------------------------------------------
//5)exception with async and await and try catch

const someFunction=async ()=>{
    try{
        await doSome()
    }catch(err){
       throw new customError(err.message)
        //console.error()
    }
}

someFunction()