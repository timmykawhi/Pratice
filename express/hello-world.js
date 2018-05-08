var express = require("express");
var  webServer = express();

webServer.get("/",function(req,res){
    res.send("hello world");
});
var webPort = 3000;
webServer.listen(webPort,function(){
    console.log("listen on"+webPort);
});