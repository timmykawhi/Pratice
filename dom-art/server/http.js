var http = require('http');
var app = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end('<h1>HTML</h1>');
});
var server = app.listen(3000, function () {
    console.log(`listen on ${server.address().address}:${server.address().port}`);
});