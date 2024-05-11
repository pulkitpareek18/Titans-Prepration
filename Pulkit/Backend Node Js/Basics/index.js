import express from "express";
import path from "path"
import mongoose, { mongo } from "mongoose";


mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName: "backend"
})
.then(()=>console.log("Database Connected"))
.catch((e)=>console.log(e))



const messageSchema = new mongoose.Schema({
    name: String,
    email: String
});


const Message = mongoose.model("Message",messageSchema)




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

app.get("/add", async (req,res)=>{

    await Message.create({name:"Abhi2",email:"sample2@gmail.com"})
    res.send("Nice");



});

app.get("/success",(req,res)=>{
    res.render("success");
});

app.post("/contact",async (req,res)=>{

    const {name,email} = req.body;
    
    await Message.create({name,email});

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