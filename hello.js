var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis! & Moe Shehab the DevGuy\n');
}).listen(1337, 'mhmdksh.com');
console.log('Server running at http://mhmdksh.com:1337/');
