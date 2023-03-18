//lodash and cowsay and import/export
import _ from "lodash"
//lodash used for arrays 

const arr=[1,4,6,8]

console.log(_.chunk(arr)) //divides array in chunks of size specified
// using _.chunk(arr,size)
console.log(_.last(arr))//gives last ele

//cowsay-shows msgs in cow format its in node_modules>bin>cowsay(executable file)
//npx runs executable files from bin inside node_modules
//so the command to use cowsay is:
//npx cowsay I am learning nodejs
//or

import cowsay from "cowsay"

console.log(cowsay.say({
    text:"I am learning nodejs",
    e:"00",
    T:"U",
}))

import icecream from "./icecream.js" //default import
import { strawberry } from "./icecream.js"//named import
//export default icecream={butterscotch,choco}  for default export
//for named exports syntax:there can be MULTIPLE NAMED EXPORTS but SINGLE DEFAULT EXPORTS
//export const MyComponent = () => {}
console.log(icecream)
console.log(strawberry)
console.log(icecream.butterscotch)
console.log(JSON.stringify(strawberry,null,2))//to prettify object display in command line