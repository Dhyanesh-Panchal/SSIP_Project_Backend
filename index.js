const express = require("express");
const path = require("path");
const port = 1000;

const app = express();

app.get("/", (req, res) => {
    res.json({ "Project": "is on!" });
})

app.listen(port, (error) => {
    if (error) {
        console.log("Error: ", error);
    } else {
        console.log(`Server is runnig and listening on port ${port}...`);
    }
})