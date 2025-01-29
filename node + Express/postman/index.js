import express from "express";

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
});

app.get("/", (req,res) => {
    res.send("<h1>Hello World from nodejs + expressjs!</h1>")
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/angela", (req,res) => {
    res.sendStatus(200);
});

app.patch("/user/angela", (req,res) => {
    res.sendStatus(200);
});

app.delete("/user/angela", (req,res) => {
    res.sendStatus(200);
});