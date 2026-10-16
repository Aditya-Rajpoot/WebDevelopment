let btn = document.querySelector("button");
let h3 = document.querySelector("h3");

btn.addEventListener("click", changecolor);

h3.addEventListener("click", changecolor);

function changecolor(){
    console.log(this.innerText);
    this.style.backgroundColor = "red";
}