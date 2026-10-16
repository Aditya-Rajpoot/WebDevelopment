let h1 = document.querySelector("h1");

// function getnum(){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     })
// };

// async function demo() {
//     await getnum();
//     await getnum();
//     await getnum();
//      getnum();
// }

function changeColor(color , delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            console.log(color);
            resolve("color changed")
        }, delay); 
    })
};

async function change() {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("pink", 1000);
    await changeColor("black", 1000);
}