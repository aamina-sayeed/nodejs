import crypto from "crypto"
import requestBodyparser from "../util/body-parser.js"
import writeToFile from "../util/writetofile.js"

async function postReq(req,res){
 
    if(req.url=="/api/movies"){
    try{
        let body=await requestBodyparser(req)
        //creating uuid for new data
        body.id=crypto.randomUUID()
        req.movies.push(body)
        writeToFile(req.movies)
        res.writeHead(201,{"Content-Type":"application/json"})
        console.log("Request Body",body)
        res.end()
    }catch(err){
        
        console.log(err)
        res.writeHead(400,{"Content-Type":"application/json"})
        res.end(JSON.stringify({title:"Validation Failed",message:"Request body is not valid"}))

    }
 }else{//if url does not match
    res.writeHead(404,{"Content-Type":"application/json"})
    res.end(JSON.stringify({title:"Not Found",message:"Route Not Found"}))
}
}


export default postReq