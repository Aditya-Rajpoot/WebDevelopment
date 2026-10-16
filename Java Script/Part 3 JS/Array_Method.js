// push method...

let cars = ["bmw" , "mercedes", "maruti"];
cars.push("tata");
console.log(cars);


// pop method...

console.log(cars.pop());


// unshift method...

cars.unshift("Toyota");
console.log(cars);


// shift method....

console.log(cars.shift());


// index_of methode....

let primary = ["red" , "yellow" , "blue"];

console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green"));
console.log(primary.indexOf("Yellow"));


// includes method....

console.log(primary.includes("yellow"));
console.log(primary.includes("green"));


// Concat method....

let first = [1 ,2 ,3];
let last = [4, 5, 6];

let merge = first.concat(last);

console.log(merge);


// reverse method.....

console.log(first.reverse());


// Slice Mrthod....

let color = ["red", "yellow", "blue", "white", "orange", "pink"];

console.log(color.slice());
console.log(color.slice(2));
console.log(color.slice(2,3));
console.log(color.slice(-2));


// Splice Method....


let students = ["aman", "bob", "charlie","david","john","zain"];

console.log(students);
console.log(students.splice(4));
console.log(students);
console.log(students.splice(0,1));
console.log(students);
console.log(students.splice(0,0,"Chaman","Gandu"));
console.log(students);


// sort method....

let colors = ["red" , "yellow" , "blue", "brown"];
console.log(colors);
console.log(colors.sort());


// Array Reference....

let arr = ['a','b', 'c'];

let arr_copy = arr;

console.log(arr == arr_copy);


// Nested Array....

let number = [[1,2],[3,4],[4,5]];
console.log(number);
console.log(number[0]);
console.log(number[0][1]);
console.log(number[1][1]);