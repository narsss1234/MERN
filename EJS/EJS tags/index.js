import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

let bowl = ["Apple", "Orange", "Banana"]

app.get("/", (req,res) => {
    res.render(__dirname + "/public/index.ejs", { fruits: bowl });
});

const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items : bowl,
    htmlContent: "<em>This is some em text</em>"
}

app.get("/ejs", (req,res) => {
    res.render(__dirname + "/public/ejs_tags.ejs", data);
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});