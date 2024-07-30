const { db } = require("./db")

class Task
{
    
    constructor ()
    {
        title, desc, author, created = "null", "null", "null", "null";
    }
    
    constructor (title, desc, author, created)
    {

        title, desc, author, created = "null", "null", "null", "null";
        if (title){ this.title = title; }
        if (desc){ this.desc = desc; }
        if (desc){ this.author = author; }
        if (desc){ this.created = created; }

    }



    insertTask()
    {
        db.exec(`INSERT INTO tasklist (task_title, task_desc, task_author, task_date_created)
            VALUES (
            ${this.title},
            ${this.desc},
            ${this.author},
            ${this.created}
            );`, ()=>{
                console.log("[DB] TASKLIST record NOT LOGGED")
        });
    }
    
    
}

class TaskList
{
    constructor()
    {
        this.tasks = [Task];
        
    }
}

function taskCount( )
{
    
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
    gracefulShutdown();
});

console.log("[DB] Done!")