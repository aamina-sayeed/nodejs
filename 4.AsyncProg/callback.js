//a fn passed ad an argument to another function they are sync in nature is called callback function
//THis is sync
// console.log("Task start")

// function asyncTask(cb){
//     console.log("Task running")
//     cb()
// }

// asyncTask(()=>{console.log("Aamina")})
// console.log("Task end")

// const name="Dipesh"

//if we change code here name is initialised after function comes so its ubdefined at the time
//of fucntion exe so we have to change this cb to async style

// console.log("Task start")

// function asyncTask(cb){
//     console.log("Task running")
//     cb()
// }

// asyncTask(()=>{console.log(name)})
// console.log("Task end")

// const name="Aamina" //shows error Cannot access 'name' before initialization

//modified code to async style using stetimeouyt

// console.log("Task start")

// function asyncTask(cb){
//     console.log("Task running")
//     setTimeout(cb,0)//to make it async now this cb is put outside of calstack until rest of js file
//     //is executed first so here name will be initailsed before fn exec uted therefore no error
// }

// asyncTask(()=>{console.log(name)})
// console.log("Task end")

// const name="Aamina"


//HANDLING ERRORS WITH CALLBACKS

// function asyncTask(cb){
//     setTimeout(()=>{
//         //cb("Error!")
//         cb(null,"This is data from server")
//     },0)
// }

// asyncTask((err,data)=>{//error first callback
//     if(err){
//         throw err
//     }
//     else{
//         console.log("data",data)
//     }
// })

//callback hell -multiple nested callbacks
//solution -using async await or promises 
function makeAPiCall(cb){
    setTimeout(() => {
        console.log("This is asynctask exec")
    }, 0);
}

makeAPiCall(()=>{
    makeAPiCall(()=>{
        makeAPiCall(()=>{
            makeAPiCall(()=>{

            })
        })
    })
})