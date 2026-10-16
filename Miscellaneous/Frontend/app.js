// object Prototype....

// let arr = [1,2,3];
// arr.sayhello = () => {
//     console.log("hello , i am arr");
// };

// let arr2 = [4,5,6];
// arr2.sayhello = () => {
//     console.log("hello , i am arr");
// };

// factory function...

// function personmaker(name , age){
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log (`hi my name is ${this.name}`);
//         }
//     }
//     return person;
// }

// let p1 = personmaker("adam", 28);//copy
// let p2 = personmaker("john", 24);//copy
// let p3 = personmaker("elly", 30);//copy

// New Operator/ Constructor -> doesn't return anything and start with capital letter...
// function Person (name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// };

// Person.prototype.talk = function() {
//     console.log(`hello, my name is ${this.name}`);
// }

// let p1 = new Person("Adam", 25);
// let p2 = new Person("Jhon", 22);

// Classes....

// class Person {
//     constructor (name, age){
//         this.name = name ;
//         this.age = age;
//     }
//     talk () {
//         console.log(`hello, my name is ${this.name}`);
//     }
// }

// let per1 = new Person("Smith", 25);
// let per2 = new Person("Warner", 22);

// Inheritance.....

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hello, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks= marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name,age);
        this.subject = subject;
    }
}