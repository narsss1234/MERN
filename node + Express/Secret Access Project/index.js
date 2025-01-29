import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();

const port = 3000;

var userIsAuthorized = false;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/secrets", (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.use(bodyParser.urlencoded({ extended : true }));

function authCheck (req,res,next){
    if (req.body['secret'] == "password") {
        userIsAuthorized = true;
    }
    next();
};

app.use(authCheck);

app.post("/submit", (req, res) => {
    if (userIsAuthorized == true) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
});