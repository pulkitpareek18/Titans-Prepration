import { app } from "./app.js";
import { connectDB } from "./data/database.js";

// Database Connection
connectDB()
app.listen(process.env.PORT, ()=>{
    console.log("Server is working");
})