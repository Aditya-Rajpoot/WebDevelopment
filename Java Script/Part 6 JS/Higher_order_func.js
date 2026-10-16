function Multi_greet(func,count){
    for(let i = 1; i<= count; i++){
        func();
    }
}

let greet = function(){
    console.log("Namaste");
}

Multi_greet(greet,200);