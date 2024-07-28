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
    console.log("[DB] Initializing...")
    db.exec(`CREATE TABLE IF NOT EXISTS tasklist`)
}

module.exports.db = db;
module.exports.gracefulShutdown = gracefulShutdown;


