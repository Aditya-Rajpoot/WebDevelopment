// function hello(){
//     console.log("hiii");
// }

// function demo(){
//     hello();
// }

// Visualizing the CAll STACK....

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();
