import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";

inquirer
    .prompt([{
        message: "Type in your URL: ",
        name: "URL"
    }])
    .then((answers) => {
        console.log(`${answers.URL}, thank you, we got the URL!`)
        const url = answers.URL;

        var qr_png = qr.image(url, {type: 'png'});
        qr_png.pipe(fs.createWriteStream('first_qr.png'));

        fs.writeFile("URL.txt", url, (err) => {
            if(err) throw err;
            console.log("This file has been be saved!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("null is not allowed!")
        }
        return;
    });