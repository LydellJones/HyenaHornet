console.log("Taskscript loading...")

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