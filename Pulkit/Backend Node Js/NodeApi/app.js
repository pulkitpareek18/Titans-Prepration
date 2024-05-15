import express from "express";
import mongoose from "mongoose";

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName: "backendapi"
})
.then(()=>console.log("Database connected"))
.catch((e)=>console.log(e))


const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("User",schema);


const app = express();

// Using Middlewares
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Nice working")
});

app.get("/users/all",async (req,res)=>{

    const users = await User.find({});
    console.log(req.query);
    
    const keyword = req.query.keyword;
    console.log(keyword)

    res.json({
        success: true,
        users
    });
});


app.post("/users/new",async (req,res)=>{

    const {name,email,password} = req.body;

    await User.create({
        name,
        email,
        password
    })

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Registered Successfully"
    });

});

app.get("/userid/special",async (req,res)=>{

    res.json({
        success: "true",
        user: "Just Joking"
    })
})

app.get("/userid/:id",async (req,res)=>{

    const {id} = req.params;

    const user = await User.findById(id);

    console.log(req.params)

    res.json({
        success: "true",
        user: user
    })
})


app.listen(4000, ()=>{
    console.log("Server is working");
})