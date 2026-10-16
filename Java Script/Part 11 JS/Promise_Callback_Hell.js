let h2 = document.querySelector("h2");

function changeColor(color, deley){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            h2.style.color = color;
            resolve("color changed");
        }, deley);
    });
}


changeColor("red", 1000)
.then(()=>{
    console.log("changed color to red");
    return changeColor("green",1000 );
})
.then(()=>{
    console.log("changed color to green");
    return changeColor("blue",1000 );
})
.then(()=>{
    console.log("changed color to blue");
    return changeColor("pink",1000 );
}).then(()=>{
    console.log("changed color to pink");
    return changeColor("black",1000 );
})
.then(()=>{
    console.log("changed color to black");
});