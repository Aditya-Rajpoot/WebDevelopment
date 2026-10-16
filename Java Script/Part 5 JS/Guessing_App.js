const max = prompt("Enter the max Number!!");
// console.log(max);

const random = Math.floor(Math.random() * max) +1;

let guess = prompt("guess the number");

while (true){
    if (guess == "quit"){
        console.log("quiting app");
    }else if (guess == random){
        console.log("you are right !! congrats","random number:",random );
        break;
    }else {
        guess = prompt("you are wrong , please try again");
    }
}

