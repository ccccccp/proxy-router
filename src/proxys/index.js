const url = require("url");
const pathNameMap = require("./const/pathnameMap.js");
const { get } = require("./request");
const createServer = require("./server");
createServer(async (req,res) => {
    const { pathname, query } = url.parse(req.url,true);
    const targetPath = pathNameMap.get(pathname);
    console.log("path:",pathname,"目标请求地址:",targetPath);
    if(targetPath!==undefined){
        const data = await get(targetPath,query);
        res.end(data);
    }
    res.end(`{
        code:502,
        msg:'请检查路径'
    }`);
})
