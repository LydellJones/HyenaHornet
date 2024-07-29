const path = require('path');
const express = require('express');
const { gracefulShutdown, db, databaseSetup } = require('./scripts/db');


// Use __dirname to get the directory name of the current module
function getFile(file) {
    return path.resolve(__dirname, file);
}

const app = express();

app.use(express.static(getFile("../src")));

app.get('/', (req, res) => {
    console.log("[NET] GET on /");
    res.sendFile(getFile("pages/index.html"));
});

databaseSetup()

app.listen(3000, () => {
    console.log(`[NET] Port 3000 is open`);
});

process.on("SIGINT", () => {
    gracefulShutdown();
    process.exit()
});