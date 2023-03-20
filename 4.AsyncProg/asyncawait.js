import scan from "readline-sync"

const userLogin=()=>{
    
    console.log("ENter username and passowrd")
    let username=scan.question("ENter username:")
    let passowrd=scan.question("ENter password:")

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Performing USer Authentication")
            if(username=="aamina"  && passowrd=="aamina"){
                resolve("User authenticated!")
            }
            else{
                reject("Auth failed !")
            }
        },1000)
    })
}

function gotoHomepage(userAuthstatus){
    return Promise.resolve('Go to homepage as:${userAuthstatus}')
}

// userLogin().then((response)=>{
//     console.log("validated USer!")
//      return gotoHomepage(response)
// }).then((userAuthstatus)=>{
//     console.log(userAuthstatus)
// }).catch((err)=>{
//     console.log(err)
// })

//trying to  use async await


async function performTask(){
    
try{
    const response=await userLogin()
    console.log("Validated USer")
    const userAuthstatus=await gotoHomepage(response)
    console.log(userAuthstatus)

}catch(err){
    console.log(err)
}

}

performTask()

//converting promises to async await

const makeApiCall=(time)=>{
    return ()=> 
    new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve("This APi exec in :"+time)
      }, time);
    })
  }
  
  let multiApiCall=[makeApiCall(1000),makeApiCall(2000),makeApiCall(500)]
  
//   Promise.all(multiApiCall).then((values)=>{ //executes all promises/calls before interaction
//     console.log(values)
//   })

(async function (){
 for(let req of multiApiCall){
    console.log(await req()) //one after another code api calls are made instad of all at 
    //once like in Promise.all
 }
})()//self exe function