

import path from "path"

const filePath="/home/aamina/nodejs/nodejs/3.ErrorHandling/files/sample.txt"

//can get directory name filebase name and extension of file
//__dirname /__filename don't work in ES6
//__dirname gives dorectory of project and __filename gives name of file running currently
// console.log(path.dirname(filePath))
// console.log(path.extname(filePath))
// console.log(path.basename(filePath)) //filename

// let sampleFile="sample.txt" //joins name with path
// console.log(path.join(path.dirname(filePath)),sampleFile)


import fs from "fs"

// console.log(fs)

//reading data from file

//1)Async way 
// fs.readFile(filePath,"utf-8",(err,data)=>{
//     if(err) throw new Error("something went wrong")
//     // console.log(data)//we get buffer
//     // console.log(data.toString())//we get string 
//     //or use utf-8 as parameter
//     console.log(data)
// })

//2)sync way so it will return data

// try{
// const data= fs.readFileSync(filePath,"utf-8")
// console.log(data)//without utf-8 we will get buffer
// }catch(e){
//     console.log(e)
// }

//sync function first then async function executed

//3)fs promises

import fsPromise from "fs/promises"

const fileReading=async()=>{
    try{
        const data=await fsPromise.readFile(filePath,"utf-8")
        console.log("FS PROMISES",data)
    }catch(e){
        console.log(e)
    }
}

fileReading()


//writing into  files

//1)async way

let txtfilePath="/home/aamina/nodejs/nodejs/3.ErrorHandling/files/text.txt"
const content="Jarvis says HELLO"
// fs.writeFile(txtfilePath,content,(err)=>{
//         if(err) throw new Error("something went wrong")
//          console.log("Write operation sucessful")
//          fs.readFile(txtfilePath,"utf-8",(err,data)=>{//to read the added data
//                 if(err) throw new Error(err)
//                 console.log(data)
//             })
            
//     })

//2)sync way

try{
    const data= fs.writeFileSync(txtfilePath,content)
    console.log("write done ")//without utf-8 we will get buffer
    }catch(e){
        console.log(e)
    }

//3)fs promises

let newfilePath=""
const writingFile=async ()=>{
    try{
    //await fsPromise.writeFile(txtfilePath,content) or use 
    await fsPromise.writeFile(txtfilePath,"Its AWesome",{
        flag:"a+"
    });//this will move head pos to eof so u can add stuff at end without append
    //await fsPromise.appendFile(txtfilePath,"\nadds data at end of file ")
    await fs.promises.rename(txtfilePath,path.join(__dirname,"files","newfile.txt"))
    const data=await fsPromise.readFile(path.join(__dirname,"files","newfile.txt"))
    console.log(data.toString())
}
catch(err){
    console.log(err)
}
 }
// writingFile()

//To rename files


