
function getReq(req,res){
    
    let baseurl=req.url.substring(0,req.url.lastIndexOf("/")+1) //substring(start,end+1)
    console.log(baseurl)//to get /api/movies part of url from api till last slash
    //to checkif base url is right in url or not
    let id=req.url.split("/")[3]
    const regexV4=new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)
    console.log(id)

    if(req.url=="/api/movies"){//get all movies
        
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.write(JSON.stringify(req.movies))//movie we are fecthig from json file
        res.end()

    }else if(!regexV4.test(id)){//not valid uuid

//to check if movie id is valid or not .test is js regex method to test pattern against cases
//ex pattern.test("string")

    res.writeHead(404,{"Content-Type":"application/json"})
    res.end(JSON.stringify({title:"Not Found",message:"UUID Is Not Found"}))
    

    }else if (baseurl === "/api/movies/" && regexV4.test(id)) {//checking baseurl and regex pattern 
        //pass or not
        
        res.setHeader("Content-Type", "application/json");
        let filteredMovie = req.movies.filter((movie) => {//retruns array which pass test 
            //condition
          return movie.id === id;

         });
    
        if (filteredMovie.length > 0) {//which means more than or atleast one element in array of ele
            //which match the movie id in db
          res.statusCode = 200;
          res.write(JSON.stringify(filteredMovie));
          res.end();
        } else {
          res.statusCode = 404;
          res.write(
            JSON.stringify({ title: "Not Found", message: "Movie not found" })
          );
          res.end();
        }

    }
    else{//if url does not match
        res.writeHead(404,{"Content-Type":"application/json"})
        res.end(JSON.stringify({title:"Not Found",message:"Route Not Found"}))
    }
}

export default getReq