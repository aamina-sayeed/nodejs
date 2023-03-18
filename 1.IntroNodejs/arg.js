
console.log(process.argv.slice(2)[0])
//slice(start,end+1)->returns new array
//gives o.p on command node arg.js name=aamina
//[
//     '/usr/bin/node',//path of node modules
//     '/home/aamina/nodejs/nodejs/1.IntroNodejs/arg.js',//file path
//     'name=aamina' //argument stored
//   ]

process.argv.forEach((value,index)=>{
    console.log(`${index}:${value}`)
})

//minimist package-can read directly the argument values passed in 
//command line but need to use -- before key in command line 
//example :node arg.js --name=aamina
//to use import package and use syntax below:

import minimist from "minimist"

const my_name=minimist(process.argv.slice(2))

console.log(my_name.name)//to get only value not key also do .key