var  http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello <b>World</b>!');
    res.end();
}).listen(8888);

console.log('server sedang berjalan di http://localhost:8888');