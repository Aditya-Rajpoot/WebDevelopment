// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     alert("button clicked!");
//     console.log ("liked");
// }


let btns = document.querySelectorAll("button");


function sayHello(){
    alert("Hello");
}

for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log("you are entered the button");
    }
    console.log(btns);
}

