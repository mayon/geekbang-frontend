const http = require('http');

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        response.writeHead(200, { 'content-Type': 'text/html' });
        response.end('Hello World\n');
    });
}).listen(8080);

console.log("server started");