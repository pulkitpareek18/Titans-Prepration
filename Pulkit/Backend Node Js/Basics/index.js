import express from "express";
import path from "path";
import mongoose, { mongo } from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName: "backend"
})
.then(()=>console.log("Database Connected"))
.catch((e)=>console.log(e))
 


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});


const User = mongoose.model("User",userSchema);




const app = express();

const users = [];

// Using Middlewares
app.use(express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

// Settings up View Engine
app.set("view engine","ejs");


const isAuthenticated = async (req,res,next)=>{
    const {token} = req.cookies;

    if(token){
        // If token Exists, means already Logged In

        const decoded = jwt.verify(token, "private-key");

        req.user = await User.findById(decoded._id);

        // console.log(decoded)

        next();

    }else{
        res.redirect("login");
    }
};


app.get("/",isAuthenticated,(req,res)=>{
    
    res.render("logout",{name:req.user.name});
    console.log(req.user)

});


app.get("/register",(req,res)=>{
    res.render("register");
})

app.post("/register", async (req,res)=>{
    
    const { name, email, password } = req.body;
    let user = await User.findOne({email})

    console.log(req.user)

    if(user){
        res.redirect("login");
  
    }else{

        const hashedPassword = await bcrypt.hash(password,10);

        user = await User.create({
            name,
            email,
            password: hashedPassword
        });
    
        const token = jwt.sign({ _id: user._id}, "private-key" );
        // console.log(token);
    
        res.cookie("token",token,{
            httpOnly: true, expires: new Date(Date.now()+60*1000)
        });

        res.redirect("/");
    } 

});

app.get("/login", (req,res)=>{
    res.render("login")
})

app.post("/login",async (req,res)=>{
    console.log(req.body)

    const { email, password } = req.body;

    let user = await User.findOne({email})


    if(!user){
        res.redirect("register");
        return console.log("Register First")
    }else{

        const isMatch = await bcrypt.compare(password,user.password);

        if(isMatch){
            req.user = user;
            const token = jwt.sign({ _id: user._id}, "private-key" );
            res.cookie("token",token,{
                httpOnly: true, expires: new Date(Date.now()+60*1000)
            });
            res.redirect("/");
        }
        else{
            console.log("Incorrect Password")
            res.render("login",{message:"Incorrect Password", email});
        }
        
    } 
   
})




app.get("/logout",(req,res)=>{
    res.cookie("token",null,{
        httpOnly: true, expires: new Date(Date.now())
    }
    );
    res.redirect("/");
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