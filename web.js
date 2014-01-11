var http = require('http');
var url = require('url');
var fs = require('fs');
var tokenizer = require('./scripts/tokenizer');

var tokens = {TITLE: 'Scoreboard: v1.0',
              SCRIPT: '\"/scripts/script.js\"',
              GAME: 'Spades'};
var fsEncoding = {encoding: 'utf8'};

http.createServer(function (request, response) {
//console.log(require('util').inspect(url.parse(request.url)));
  var path = url.parse(request.url).path;
  if (path.indexOf('/scripts')!=-1) {
    response.writeHead(200, {'Content-Type': 'text/javascript'});
    response.end(fs.readFileSync('.' + path,fsEncoding));
} else if (path.indexOf('/css')!=-1) {
    response.writeHead(200, {'Content-Type': 'text/css'});
    response.end(fs.readFileSync('.' + path,fsEncoding));
  } else {
    response.writeHead(200, {'Content-Type': 'text/xml'});
    response.write(fs.readFileSync('html/start.html',fsEncoding));
    response.write(tokenizer(fs.readFileSync('html/head.html',fsEncoding),tokens));
    response.write('<body>');
      response.write(tokenizer(fs.readFileSync('html/ribbon.html',fsEncoding),tokens));
      response.write(tokenizer(fs.readFileSync('html/board.html',fsEncoding),tokens));
    response.write('</body>');
    response.write(fs.readFileSync('html/end.html',fsEncoding));
    response.end();
  }
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
