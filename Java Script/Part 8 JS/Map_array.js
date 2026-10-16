// let num = [1,2,3,4,5];

// let double = num.map((el) =>{
//     return el * 2;
// });

let Student = [{
    name : "Aman",
    marks : 89,
},{
    name : "Bob",
    marks : 80,
},{
    name : "Chirag",
    marks : 90,
}];

let Cgpa = Student.map((el) => {
    return el.marks/10;
});