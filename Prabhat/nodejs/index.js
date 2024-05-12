import exp from "constants";
import express from "express";
import path from "path";

const app = express();

const users= [];

//Using middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({extended: true}));

//Setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    //res.send("<h1>Hi</h1>");
    //res.sendStatus(500);

    res.render("index", {name: "Prabhat"});
    //res.sendFile("index.html");
});

app.post("/", (req, res) =>{
    //console.log(req.body);

    users.push({username: req.body.name, email: req.body.email});
    res.render("success");
});

app.get("/users", (req, res) =>{
    res.json({
        users,
    });
});

/*app.get("/products", (req, res) =>{
    res.json({
        success: true,
        products: [],
    });
});*/

app.listen(5000, () =>{
    console.log("Server is working");
});