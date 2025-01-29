import express from "express";

const app = express();

const port = 3000;

app.get("/", (req,res) => {
    res.send("Hello World!")
});

app.get("/anotherone", (req, res) => {
    res.send("<h1>Hello, World! Nice to meet you!</h1>")
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}.`)
});