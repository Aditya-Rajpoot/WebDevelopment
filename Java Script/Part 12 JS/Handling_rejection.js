 h1 = document.querySelector("h1");

function Change_Color(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {

            let num = Math.floor(Math.random()*5)+1;
            if(num > 3){
            reject("promise rejected");
            }

            
            h1.style.color = color;
            console.log(`color change to ${color}`);
                resolve("color chnaged");
        }, delay);
    })
};


 async function demo() {
    try {
        await Change_Color("red", 1000);
        await Change_Color("green", 1000);
        await Change_Color("blue", 1000);
        await Change_Color("pink", 1000);
        await Change_Color("black", 1000);
    }catch(err){
        console.log("error caught")
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number : ",a+3);
 } 
