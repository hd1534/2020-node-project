var http = require('http');
var path = require('path');
var fs = require('fs');

http.createServer(function (req, res) {
    // req.url -> http://127.0.0.1:3000/chiron.jpg    
    var fname = path.basename(req.url);     // chiron.jpg
    var imageFile = __dirname + path.sep + 'images' + path.sep + fname;

    fs.readFile(imageFile, function(err, data) {
        if( err ) {
            res.statusCode = 404;
            res.end('Not Found');
            return;
        }
        // text/plain, text/html, application/json, image/jpeg
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data);
    });

}).listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000');
});