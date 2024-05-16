import express from "express";
import userRouter from "./routes/user.js"
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js";

export const app = express();

config({
     path: "./data/config.env"
});

// Using Middlewares
app.use(express.json())
app.use(cookieParser())

// Using Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);


app.get("/",(req,res)=>{
    res.send("Nice working")
});




