import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url))

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

app.get("/bandNameGenerator", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.use(bodyParser.urlencoded({ extended : true }));

app.post("/submit", (req, res) => {
    console.log(req.body)
});