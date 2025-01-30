import express from "express";
import ejs from "ejs";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const userName = "satyaN_1974_1974";
const password = "satyaN_1974_1974";
const apiKey = "9c15e422-62da-490d-ad68-fc0a91559a4f";
const bearerToken = "d46ccf7f-f830-4cd9-8208-b94efc14c638";

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
    try{
        const result = await axios.get(API_URL + "/random");
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        res.sendStatus(404).send(error.message);
    }
});

app.get("/basicAuth", async (req, res) => {
    try{
        const result = await axios.get(API_URL + "/all?page=2", {
            auth: {
                username: userName,
                password: password
            }
        } );
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch(error){
        res.sendStatus(404).send(error.message);
    }
});

app.get("/apiKey", async (res, req) => {
    try {
        const result = await axios.get(API_URL + "/filter", {
            params: {
                score: 5,
                apiKey: apiKey
            }
        });
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});