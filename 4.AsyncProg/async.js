import { start } from "repl"

//ex of sync prog blocking

// console.log("start operation")

// function sleep(millliseconds){
//     let startTime=new Date().getTime()
//     console.log("Operation is running")
//     while(new Date().getTime()<startTime+millliseconds){
//         console.log("in progress")
//     }
//     console.log("Operation is completed")
// }


// sleep(1000)
// console.log("do something else")


//JES-HEap+CAll stack-single thread to execute operations


//changing to async prog -non blocking

console.log("start operation")

function sleep(millliseconds){
    
    console.log("Operation is running")
    setTimeout(()=>{
        console.log("operation is done")
    },millliseconds)
    //async execution-pops settimeout from call stack to web api-seperate thread-
    //for event litener,setINtervale etc
    //in web api settimeouet regusters itself into event table then it oust ito task queue 
    //settimeout will wait in task quuee until call stack is empty then from task queue events are passed to call stack
    //this is called event loop

}

sleep(1000)

console.log("do something else")