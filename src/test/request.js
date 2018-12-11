const http = require("http");
const qs = require("querystring");
const url = require("url");

const params = {
    city:'北京',
    start:0,
    count:5
};
const post = () => {
    const option = {
        protocol:'http:',
        hostname:'api.douban.com',
        port:80,
        path:'/v2/movie/in_theaters',
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(qs.stringify(params))
        }
    }
    const req = http.request(option,(res) => {
        console.log("code:",res.statusCode);
        console.log("headers:",res.headers);
        res.on("data",(chunk) => {
            console.log("on-data:",chunk.toString());
        });
        res.on("end", () => {
            console.log("on-end");
        });
    });
    req.on("error", (e) => {
        console.log("on-err", e);
    });
    req.write(qs.stringify(params));
    req.end();
}
//post();

const get = (url,params) => {
    return new Promise((resolve,reject) => {
        http.get(url + "?"+ qs.stringify(params), (res) => {
            res.on("data",(chunk) => {
                console.log("on-data:",chunk.toString());
                resolve(JSON.parse(chunk.toString()));
            });
            res.on("end", () => {
                console.log("on-end");
            });
        }).on("error", (e) => {
            reject({
                error:e
            })
        });;
    })
    
}
module.exports = {
    get:get
}