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
.then(() =>{
    console.log("Data1 saved successfully");
    return savetodatabase("hello world");
})
.then(()=>{
        console.log(" Data 2 saved");
        return savetodatabase("helloooo");
})
.then(()=>{
        console.log(" Data 3 saved");
})
.catch(()=>{
    console.log("weak connection");
});