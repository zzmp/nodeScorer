var http = require('http');
var url = require('url');
var fs = require('fs');

//force string return in fileread
fs.read = function (path) {
  return fs.readFileSync(path, {encoding: 'utf8'});
}

//supplant tokenized strings
String.prototype.supplant = require('./scripts/tokenizer');

//serve page elements by folder
http.ServerResponse.prototype.serve = function (path) {
  path = '.' + path;
  if (path.slice(-1) != '/')
    if (path.slice(path.lastIndexOf('.')) == '.ico') {
      this.writeHead(200, {'Content-Type': 'image/ico'});
      this.end(fs.readFileSync(path), 'binary');
    } else //send everything but icon as text
      this.end(fs.read(path).supplant(tokens));
  else {
    this.writeHead(200, {'Content-Type': 'text/xml'});
    var proto = require(path + 'proto.js');
    for (var div in proto) {
      this.write(
        fs.read(path + proto[div] + '.html').supplant(tokens));
    }
    this.end();
  }
}

var tokens = {TITLE: 'Scoreboard: v1.0',
              SCRIPT: '\"/scripts/script.js\"',
              GAME: 'Spades'};

http.createServer(function (request, response) {
//console.log(require('util').inspect(url.parse(request.url)));
  var path = url.parse(request.url).path;
  if (path == '/') path = '/html/';
  response.serve(path);
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
