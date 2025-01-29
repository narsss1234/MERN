import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/submit", (req,res) => {
    console.log(req.body['street'])
    console.log(req.body['pet'])
    res.send("Work in progress!")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
});