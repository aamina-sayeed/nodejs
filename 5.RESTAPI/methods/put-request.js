import writeToFile from "../util/writetofile.js"
import requestBodyparser from "../util/body-parser.js"

async function putReq(req,res){
    
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
        try{
            let body=await requestBodyparser(req)
            const index=req.movies.findIndex((movie)=>{//index of record
                return movie.id===id
            })
            if(index===-1){//if movie not found
                res.statusCode = 404;
                res.write(
                    JSON.stringify({ title: "Not Found", message: "Movie not found" })
                  );
                res.end();
            }else{//if index found
                req.movies[index]={id,...body}//same id but diff body
                writeToFile(req.movies)
                res.writeHead(200,{"Content-Type":"application/json"})
                res.end(JSON.stringify(req.movies[index]))
            }
        }catch(err){
            res.statusCode = 400;
            res.writeHead(400,{"Content-Type":"application/json"})
            res.end(
              JSON.stringify({ title: "Not Found", message: "Request body not valid" })
            );
          
        }
    }else{//if url does not match
        res.writeHead(404,{"Content-Type":"application/json"})
        res.end(JSON.stringify({title:"Not Found",message:"Route Not Found"}))
    }


}

export default putReq