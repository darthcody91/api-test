const express = require('express')
const app = express();

app.get("/", (req,res) => {
    res.send("Welcome to my Cody's backend application");
});

app.get("/cody", (req,res) => {
    res.send("Hello Cody!");
});

app.listen(3000,() => {
    console.log("Listening");
});