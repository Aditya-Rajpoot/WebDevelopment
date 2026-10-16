let h3 = document.querySelector("h3");

async function greet(){
    //throw "weak connection";
    return "hello";  
};

greet()
.then((result)=>{
    console.log("promise in resolved");
    console.log("return a result :",result);
})
.catch((error)=>{
    console.log("weak connection promise was rejected");
})


