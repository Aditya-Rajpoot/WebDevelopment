// using call back

// function savetoDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10)+1;

//     if(internetSpeed >  2 ){
//         success();
//     }else{
//        failure();
//     }
// }

// savetoDB("ADI", ()=>{
//     console.log("Data Saved Successfully");
//     savetoDB("hello", ()=>{
//         console.log("success");
//         savetoDB("adiiii",()=>{
//             console.log("full data saved");
//         }, ()=>{
//             console.log("little bit data saved");
//         });
//     },()=>{
//         console.log("failure");
//     });
// },
// ()=>{
//     console.log("failed to save");
// });

// Using Promise func....

function savetoDB (data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) +1;
        if (internetSpeed > 3){
            resolve("successfully data saved");
        }else{
            reject("weak connection");
        }
    });
};

savetoDB("apna college")
.then(()=>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected");
})