h1 = document.querySelector("h1");


function changeColor(color, delay ,nextcolor){
    setTimeout(() => {
         h1.style.color = color;
         if(nextcolor) nextcolor();
    }, delay);
};

changeColor("red", 1000 , ()=>{
    changeColor("green", 1000 , () =>{
        changeColor("pink", 1000 ,() =>{
            changeColor("blue" ,1000);
        });
    });
});

// callback nesting => callback hell




