import fs from "fs"


function writeToFile(data){
    const filePath="/home/aamina/nodejs/nodejs/5.RESTAPI/data/movies.json"
    try{
    fs.writeFileSync(filePath,JSON.stringify(data),"utf-8")

    }catch(err){
        console.log(err)
    }
}

export default writeToFile