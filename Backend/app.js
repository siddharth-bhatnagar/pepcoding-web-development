const express = require('express');
// Server: // route -> request -> response/file 
// File System// path -> interact/type -> file/folder 
// server init
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Hello from home page");
    res.send("<h1>Hello from Backend</h1>");
});

let user = {

};

// Getting data from server
app.get("/user", function(req,res) {
    console.log("users");
    res.json(user);
});



// Giving data to server
app.post("/user", (req, res) => {
    console.log("req.data", req.body);
    user = req.body;
    res.status(200).send("data received");
});

app.patch("/user", (req, res) => {
    let obj = req.body;
    for(let key in obj) {
        user[key] = obj[key]
    }

    res.status(200).json(user);
});

// template route
app.get("/user/:id", (req, res) => {
    console.log(req.params.id);
    res.send("Hello");
});

app.delete("/user", (req,res) => {
    user = {};
    res.status(200).json(user);
});

app.listen(8080, () => console.log("Server started on port 8080"));

// PORT, IP Address and Localhost
