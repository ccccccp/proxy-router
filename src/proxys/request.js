const http = require("http");
const qs = require("querystring");
const url = require("url");


/**
 * 
 * @param {url} url http://www.xx.com
 * @param {paramsObj} params {a:1,b:2}
 */
const get = (url,params) => {
    return new Promise((resolve,reject) => {
        http.get(url + "?"+ qs.stringify(params), (res) => {
            let data = new Buffer('');
            res.on("data",(chunk) => {
                console.log(chunk.constructor.toString(), chunk.constructor.prototype)
                data = Buffer.concat([data,chunk]);
            });
            res.on("end", () => {
                resolve(data.toString());
                //console.log("on-end");
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