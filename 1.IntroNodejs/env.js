//1.Can pass env variables from command line using :
//$ NAME=AAMINA node env.js (KEY must be in ALL CAPSS)
//To access use console.log(process.env.key) in env.js file
//and again repeat the previous command $ NAME=AAMINA node env.js 
//ex:process.env.NAME 

//2.Can pass using .env file 
//install npm i dotenv and import it create a .env file and 
//save credentials here.
import dotenv from "dotenv"

dotenv.config()//to get values from .env file

console.log(process.env.NAME)
console.log(process.env.PROFESSION)
console.log(process.env.COURSE)

