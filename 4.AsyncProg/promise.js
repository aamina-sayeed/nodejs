//Promises are async by nature
//can interact with already resolved promise using .then
//but cannot interact with an executed callback after its executed
// const promise=new Promise((resolve,reject)=>{
//     console.log("Async task execution")
//     throw "err" //automaticallly reject() happens and catch is called
//     if(false){
//         const person={
//             Username:'Aamina'
//         }
//         resolve(person) //if console.log("async task execution") is executed
//     }
//     else{
//         const error={
//             error:1001
//         }
//         reject(error) //activated if not succesful or promise not fullfilled
//     }
// })


// promise //.then used to interact with promises
// .then(
//     (val)=>{
//         //console.log("passed")//1st is if promise is resolved
//         console.log(val)
//     },

//     // (err)=>{
//     //     console.log(err) //this second fucntion called if promise is rejected
//     // }//Instead of this can use .catch((err)=>{})
// ).catch((err)=>[
//     console.log(err)
// ])
// .finally(()=>{ //excutes regardless if promise is resolved or reject
//     console.log("clean up")
// })

//can interact with already resolved promise using .then
//but cannot interact with an executed callback after its executed

// let p=Promise.resolve("Exe done")
// //let p=Promise.reject("Exe rejected")

// p.then((val)=>{
//     console.log(val)
// })


//converting callback to promise u can see name is initilaised later but still no error 
//coz promises are async which means rest of js includeing name var is executed first after which 
//async that is promise here is executed so name is actually initialised before the promise or asyncTask function



console.log("Task start")

function asyncTask(cb){
  return Promise.resolve()
}

asyncTask().then(()=>{console.log(name)})

const name="Aamina"


//Promise chaining:

const y=Promise.resolve("done")

y.then((val)=>{
  console.log(val)
  return "done2" //always return something else shows undefined
}).then((val)=>{
  console.log(val)
}).catch((val)=>{
  console.log(val) //add catch at end of all then chaining in case of errors
})

//Promise.all and race


const makeApiCall=(time)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("This APi exec in :"+time)
    }, time);
  })
}

let multiApiCall=[makeApiCall(1000),makeApiCall(2000),makeApiCall(500)]

Promise.all(multiApiCall).then((values)=>{ //executes all promises/calls before interaction
  console.log(values)
})

Promise.race(multiApiCall).then((value)=>{ //gives the promise which was executed first which takes min amount of time
  console.log(value) 
})