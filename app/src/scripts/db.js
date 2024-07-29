const { Database } = require('sqlite3');
const path = require('path');

const db = new Database(path.resolve(__dirname, '../db/app.db'), (err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log("[DB] Database connected");
});

function gracefulShutdown() {
    console.log('[DB] Need to shutdown database, please be patient...');

    // Close the database connection
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        // Exit the process after cleanup
    });
    console.log('[DB] Closed the database connection.');
    process.exit(0);
};

function databaseSetup()
{
    console.log("[DB] Initializing...");
    console.log("[DB] Loading Tasklist...");
    db.exec(`CREATE TABLE IF NOT EXISTS tasklist (
        task_title TEXT,
        task_desc TEXT,
        task_author TEXT,
        task_date_created NUMERIC
    );`);
    console.log("[DB] Loading Classes...");
    db.exec(`CREATE TABLE IF NOT EXISTS classes (
        class_id TEXT PRIMARY KEY,
        class_name TEXT
    );`);
    console.log("[DB] Loading Homework...");
    db.exec(`CREATE TABLE IF NOT EXISTS assignments (
        asgmt_id TEXT PRIMARY KEY,
        asgmt_name TEXT,
        asgmt_desc TEXT,
        asgmt_date_created NUMERIC
    );`);
}

module.exports.db = db;
module.exports.gracefulShutdown = gracefulShutdown;
module.exports.databaseSetup = databaseSetup;


