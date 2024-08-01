const { db } = require("./db")

class Task {

    constructor(title, desc, author, created) {

        title, desc, author, created = "null", "null", "null", "null";
        if (title) { this.title = title; }
        if (desc) { this.desc = desc; }
        if (desc) { this.author = author; }
        if (desc) { this.created = created; }

    }

    static insertTask(title, desc, author, created) {
        db.exec(`INSERT INTO tasklist (task_title, task_desc, task_author, task_date_created)
            VALUES (
            ${title},
            ${desc},
            ${author},
            ${created}
            );`, () => {
            console.log("[DB] TASKLIST record NOT LOGGED")
            return
        });
        Task.list.push(Task(title, desc, author, created));
        console.log("YEAH-HEAAAHHH you just pushed a record! InsertTask is functional!")
    }

    static findTask(task) {
        console.log("[DB>Tasks] SELECT COUNT(*)")
        result = db.exec(`
            SELECT * 
            FROM tasklist 
            WHERE task_title 
                LIKE \'%${task}%\';`, () => { return null });

        return result
    }

    static loadList() {
        console.log("[DB>Tasks] SELECT *")
        returnlist = [Task]
        result = db.all(`SELECT * FROM tasklist;`, () => {
            console.log("[DB] Couldnt fetch list, defaulting to null")
            return null
        })
        foreach(record in result)
        {
            returnlist.push(Task(record['task_title'], record['task_desc'], record['task_author'], record['task_date_created']));
        }
        return returnlist
    }

    static taskCount() {
        count = db.get(`SELECT COUNT(*) AS count FROM tasklist;`)
        return count['count']
    }


}

document.addEventListener("DOMContentLoaded", () => {

    const base = document.getElementById("tasktable").parentNode;
    base.innerHTML = "Gathering Records..."
    
    if (base) {
        // Get the parent node of the base element

        if (Task.taskCount != 0)
        {
            var index = 0;
            for (res in Task.loadList())
            {
                var row = base.insertRow();

                var idx = row.insertCell();
                var title = row.insertCell();
                var desc = row.insertCell();
                var author = row.insertCell();
                var created = row.insertCell();
                var result = result[index];

                idx.textContent = index;
                title.textContent = result.title;
                desc.textContent = result.desc;
                author.textContent = result.author;
                created = result.created;

                index++;
            }

        }

    } else {
        console.error("Element with ID 'basepage' not found.");
    }
});

console.log("[DB] Done!");