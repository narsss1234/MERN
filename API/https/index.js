import express from "express";
import https from "https";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import axios from "axios";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/", (req,res) => {
//     const options = {
//         hostname: "bored-api.appbrewery.com",
//         path: "/random",
//         method: "GET"
//     };
    
//     const request = https.request(options, (response) => {
//         let data ="";
//         response.on("data", (chuck) => {
//             data += chuck;
//         });

//         response.on("end", () => {
//             try{
//                 const result = JSON.parse(data);
//                 res.render("index.ejs", {activity: data});
//             } catch (error) {
//                 console.error("Failed to parse response: ", error.message);
//                 res.status(500).send("Failed to fetch activity. Please try again.");
//             }
//         });
//     });
    
//     request.on("end", (error) => {
//         console.error("Failed to make request:", error.message);
//         res.status(500).send("Failed to fetch activity. Please try again.");
//     });

//     request.end();
// });

app.get("/", async (req, res) => {
    try {
      const response = await axios.get("https://bored-api.appbrewery.com/random");
      const result = response.data;
      console.log(result);
      res.render("index.ejs", { data: result });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });

  app.post("/", async (req, res) => {
    try {
      console.log(req.body);
      const type = req.body.type;
      const participants = req.body.participants;
      const response = await axios.get(
        `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
      );
      const result = response.data;
      console.log(result);
      res.render("index.ejs", {
        data: result[Math.floor(Math.random() * result.length)],
      });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: "No activities that match your criteria.",
      });
    }
  });

app.listen(port, () => {
    console.log(`Listening at port ${port}.`)
});
