//console.time(),.trace() etc 

const x="1"
const y="1"

console.log(x,y)

//%s format variable to string 
//%d ,%i ,%o-forobject

console.log("My name is %s,age is %d","Aamina",10000)
console.clear()
console.count("I am Aamina")
console.count("I am Aamina")
console.count("I am Aamina")
console.count("I am Aamina")
console.countReset("I am Aamina")
console.count("I am Aamina")


//to print stack of code /trace of code use console.trace()
//basically shows which function called console.trace and which function 
//called that function which called console.trace and so on.

const functiona=()=>{console.trace()}

const functionb=()=>{functiona()}

functionb()

let a=2
let b=2

const add=(a,b)=>{
    console.log(a+b)
}

const measure_time=()=>{
    console.time("add()")
    add()
    console.timeEnd("add()")
}

measure_time()

