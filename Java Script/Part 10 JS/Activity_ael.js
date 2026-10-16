let btns = document.querySelector("button");

btns.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let random_color = getrandomcolor();
    h3.innerText = random_color;

    let div = document.querySelector("div");
    div.style.backgroundColor = random_color;

    console.log("Color Undated...");
});

function getrandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
    
}