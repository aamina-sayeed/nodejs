//chalk,readline-sync,prompt-sync and progress package
import chalk from "chalk"
import ProgressBar from "progress"
import scan from "readline-sync"
import promptSync from "prompt-sync"
// //[:bar] is for bar percent to show percent of download
// //etas:means expected time downloading meand show progress bar when 
// //downloading rate/bps to show the rate

const bar=new ProgressBar("downloading [:bar] :rate/bps :percent :etas ",{
    total:50,//total 20 bars to show the loading total bars or amount
})

const timer=setInterval(()=>{
    bar.tick()
    if(bar.complete){
        clearInterval(timer)
    }
},100)

console.log(chalk.red("This is red"))

let qs=scan.question("What is your name")

console.log(qs)

//

const prompt = promptSync(); 
const qs2 = prompt('What is your age? ');
console.log(qs2)