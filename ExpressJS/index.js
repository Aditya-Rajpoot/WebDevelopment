const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`app listen on port ${port}`);
});

// app.use((req, res)=>{
//     // console.log(req);
//     console.log("request recived");
//     res.send("this is a basic response");
// });

// app.get("/",(req, res)=>{
//     res.send("this is a root path");
// });

// app.get("/home",(req, res)=>{
//     res.send("this is a home path");
// });

// app.get("/search",(req, res)=>{
//     res.send("this is a search path");
// });

// app.use((req, res) => {
//     res.send("this path does not exist");
// });

app.get("/:username/:id",(req, res)=>{
    console.log(req.params);
    res.send("hello, i am a root");
});

app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("nothing query");
    }
    res.send(`search result for query ${q}`);
});