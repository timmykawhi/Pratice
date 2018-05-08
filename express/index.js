var express = require('express');
var webServer = express();

//static
webServer.use(express.static('./static'));

webServer.use('/api/test', function(req, res) {
    res.send("api test");
});

var webPort = '3000';
webServer.listen(webPort, function() {
    console.log("webServer listening on " + webPort);
});