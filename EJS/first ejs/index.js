import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const d = new Date();

const day = d.getDay();

app.get("/", (req,res) => {
    if(day == 1 || day == 6) {
        res.render(__dirname + "/index.ejs", {dayType: "a weekend", advise: "Its time to party!!"});
    } else {
        res.render(__dirname + "/index.ejs", {dayType: "a weekday", advise: "It's time to work hard!!"})
    }
});

app.listen(port, () => {
    console.log(`Listening at port ${port}.`);
});