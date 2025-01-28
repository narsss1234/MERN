const fs = require("node:fs");

fs.writeFile("test.txt", "Hello World from Node js", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("message.txt", "utf-8" , (err,data) => {
    if(err) {
        console.error(err);
        return;
    }

    console.log(data);
});