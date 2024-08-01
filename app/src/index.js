const path = require('path');
const express = require('express');
const { gShutdown, db, databaseSetup } = require('./scripts/db');
const { Task } = require('../src/scripts/taskscript');

// Use __dirname to get the directory name of the current module
function getFile(file) {
    return path.resolve(__dirname, file);
}

process.on("SIGINT", gShutdown);
process.on('SIGTERM', gShutdown);
process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
    gShutdown();
});

databaseSetup()

const app = express();

app.use(express.static(getFile("../src")));

app.get('/', (req, res) => {
    console.log("[NET] GET on /");
    res.sendFile(getFile("pages/index.html"));
});

app.get('/tasks', (req,res) => {
    console.log("[NET] GET on /tasks")
    res.sendFile(getFile("pages/tasks.html"));
})
app.listen(3000, () => {
    console.log(`[NET] Port 3000 is open`);
});

