const http = require("http");

const createServer = (cb) => {
    const server = http.createServer((req,res) => {
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        cb(req,res);
    })
    server.listen(8000,'0.0.0.0',() => {
        console.log("server start... http://127.0.0.1:8000")
    });
    server.on("error",(err) => {
        if(err){
            console.log('!!!!',err);
        }
    });
    return server;
}
module.exports = createServer;