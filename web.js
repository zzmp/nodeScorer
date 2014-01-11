var http = require('http');
var fs = require('fs');
var tokenizer = require('./js/tokenizer');

var tokens = {TITLE: 'Scoreboard: v1.0',
              SCRIPT: './js/script.js',
              GAME: 'Spades'}

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/xml'});
  response.write(fs.readFileSync('start.html'));
  response.write(tokenizer(fs.readFileSync('head.html'),tokens);
  response.write('<body>');
    response.write(fs.readFileSync('ribbon.html'),tokens);
    response.write(fs.readFileSync('body.html'),tokens);
  response.write('</body>');
  response.write(fs.readFileSync('end.html'));
  response.end();
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
