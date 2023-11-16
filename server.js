const exrpess = require('express')
const app = express();

app.get("/", (req,res) => {
    res.send("Welcome to my Josh's backend application");
});

app.get("/josh", (req,res) => {
    res.send("Hello Josh!");
});

app.listen(300,() => {
    console.log("Listening");
});