import express from "express";
import path from "path"

const app = express();

const users = [];

// Using Middlewares
app.use(express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended: true}));

// Settings up View Engine
app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("index", {name: "Pulkit"});
});

app.get("/success",(req,res)=>{
    res.render("success");
});

app.post("/contact",(req,res)=>{
    console.log(req.body)

    users.push({username: req.body.name,email: req.body.email})
    
    res.redirect("/success")
})

app.get("/users",(req,res)=>{
    res.json({users})
})

app.listen(5000,() => {
    console.log("Server is Working");
});


  














































































// import http from "http"
// import { generateLovePercent } from "./features.js";
// import fs from "fs"

// // const home = fs.readFileSync("./index.html");
// // console.log(home)

// const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     console.log(req.method)
    
//     if(req.url === "/"){
//         res.end("home");
//     }
//     else if(req.url === "/about"){
//         res.end(`<h1>Love is ${generateLovePercent()}</h1>`);
//     }
//     else if(req.url === "/contact"){
//         res.end("<h1>Contact Page</h1>");
//     }
//     else{
//         res.end("<h1>Page Not Found</h1>");
//     }
// })

//  server.listen(5000,()=>{

//     console.log("Server is Working");
//  })