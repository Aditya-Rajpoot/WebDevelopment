const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// middleware
// app.use((req,res) =>{
//     console.log("Middleware");
//     res.send("working middleware");
// })

// Next Middleware
// app.use((req,res,next) => {
//     console.log("Middleware")
//     next();
// })

// Utility Middleware
// app.use((req,res,next) =>{
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.host, req.path, req.responseTime);
//     next();
// })

// 404 Error...
// app.use((req,res)=>{
//     res.send("Page not found")
// });

// API Token as Query String...
const checkToken = (req,res,next) =>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED !");
};

app.get("/api",checkToken,(req,res)=>{
    res.send("This is api data as query String");
})



app.get("/",(req,res)=>{
    res.send("This is a root page");
});

app.get("/random", (req,res) =>{
    res.send("this is a random page");
});

app.get("/err",(req,res)=>{
    abcd = abcd;
})

app.get("/admin", (req,res) => {
    throw new ExpressError(403, "Access to admin is forebidden");
})

app.use((err,req,res,next)=>{
    let {status=500 ,message = "Some Error Occur"} = err;
    res.status(status).send(message);
})

app.listen(8080,() =>{
    console.log("server is listening");
})