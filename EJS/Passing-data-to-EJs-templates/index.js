import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", (req,res) => {
    res.render(__dirname + "/public/index.ejs");
});

app.post("/submit",(req,res) => {
    const numberOfLetters = req.body["Fname"].length + req.body["Lname"].length
    res.render(__dirname + "/public/index.ejs", {name_length: numberOfLetters});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

