// let arr = [1,2,3,4,5];

// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);

// arr.forEach (function(el){
//     console.log(el);
// });


// arr.forEach((el) =>{
//     console.log(el);
// })


// using obj for foreach function....

let arrr = [{
    name : "Aman",
    marks : 89,
},{
    name : "Bob",
    marks : 80,
},{
    name : "Chirag",
    marks : 90,
}];


arrr.forEach((Student) => {
    console.log(Student.marks);
});