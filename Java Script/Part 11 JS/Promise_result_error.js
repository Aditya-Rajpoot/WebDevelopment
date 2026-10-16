function savetodatabase(data){
    return new Promise((resolve, reject)=>{
        let internet_speed = Math.floor(Math.random()*10)+1;
        if(internet_speed > 4){
            resolve("promise was resolved");
        }else{
            reject("promise was rejected");
        }
    });
};

savetodatabase("hiiii")
.then((result) =>{
    console.log("Data1 saved successfully");
    console.log("result :", result);
    return savetodatabase("hello world");
})
.then((result)=>{
        console.log(" Data 2 saved");
        console.log("result :", result)
        return savetodatabase("helloooo");
})
.then((result)=>{
        console.log(" Data 3 saved");
        console.log("result :", result)
})
.catch((error)=>{
    console.log("weak connection");
    console.log("error :", error);
});