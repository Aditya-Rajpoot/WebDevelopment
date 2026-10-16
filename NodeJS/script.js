// let n = 5;

// for(let i = 0; i < n ; i++){
//     console.log("hello" , i);
// }

// console.log("bye");

// console.log(process.argv); // to get the command line arguments


// let args = process.argv;

// for(let i =2 ; i< args.length ; i++){
//     console.log(" hello to ",args[i]);
// }   


// const somevalue = require('./math');

// console.log(somevalue.sum(5, 10));
// console.log(somevalue.subtract(5, 10));
// console.log(somevalue.multiply(5, 10));
// console.log(somevalue.divide(5, 10));
// console.log(somevalue.g);
// console.log(somevalue.pi);


// const fs = require("./Fruits");

// console.log(fs);

import {sum , g , pi} from "./math.js";

console.log(sum(5, 10));
console.log(g);
console.log(pi);