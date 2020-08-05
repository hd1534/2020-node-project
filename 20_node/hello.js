const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("hello, world");
    }
    else if (req.url === '/json') {
        data = {msg : "hello, JSON"};
        res.writeHead(200, {"Content-Type" : "application/json"});
        res.end(JSON.stringify(data));
    }
    else if (req.url === '/hello') {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<!DOCTYPE html>");
        res.write("<html>");
        res.write("<h1>Hello, world</h1>");
        res.write("</html>");
        res.end();
    }
    else {
        res.writeHead(404, {"content-Type" : "text/html"});
        res.end("Not Found");
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
