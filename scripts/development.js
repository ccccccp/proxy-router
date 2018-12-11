const path = require("path");
const chokidar = require("chokidar");
const cp = require("child_process");
const chalk = require("chalk");
const log = console.log;

const entryPath = path.join(__dirname, '../src/app.js')
const watcher = chokidar.watch(path.join(__dirname,'../src'));
let appIns = cp.fork(entryPath);
const reload = (appIn) => {
    appIn.kill("SIGINT");
    log(chalk.green(`==========start-app=========`));
    return cp.fork(entryPath)
}

watcher.on("ready",() => {
    watcher.on("change", (path) =>{
        log(chalk.yellow("change:", path));
        appIns = reload(appIns);
    });
    watcher.on("add", (path) =>{
        log(chalk.yellow("add:", path));
        appIns = reload(appIns);
    });
    watcher.on("unlink", (path) =>{
        log(chalk.yellow("unlink:", path));
        appIns = reload(appIns);
    });
});

process.on("SIGINT", () => {
    process.exit(0);
});

