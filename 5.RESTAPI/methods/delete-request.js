import writeToFile from "../util/writetofile.js"

function delReq(req,res){
    
    let baseurl=req.url.substring(0,req.url.lastIndexOf("/")+1) //substring(start,end+1)
    console.log(baseurl)//to get /api/movies part of url from api till last slash
    //to checkif base url is right in url or not
    
    let id=req.url.split("/")[3]
    const regexV4=new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)
    
    if(!regexV4.test(id)){//not valid uuid

        //to check if movie id is valid or not .test is js regex method to test pattern against cases
        //ex pattern.test("string")
        res.writeHead(404,{"Content-Type":"application/json"})
        res.end(JSON.stringify({title:"Not Found",message:"UUID Is Not Found"}))
            
    }
    else if(baseurl === "/api/movies/" && regexV4.test(id)){
        const index=req.movies.findIndex((movie)=>{
            return movie.id===id
        })
        if(index===-1){
        res.statusCode = 404;
        res.write(
            JSON.stringify({ title: "Not Found", message: "Movie not found" })
          );
        res.end();
        }
        else{
            req.movies.splice(index,1)
            writeToFile(req.movies)
            res.writeHead(204,{"Content-Type":"application/json"})
            res.end(JSON.stringify(req.movies))
        }
    }else{//if url does not match
        res.writeHead(404,{"Content-Type":"application/json"})
        res.end(JSON.stringify({title:"Not Found",message:"Route Not Found"}))
    }        

}

export default delReq