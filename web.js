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
  if (path.slice(-1) != '/') {
    var ext = path.slice(path.lastIndexOf('.'));
    if (ext == '.ico') {
      this.writeHead(200, {'Content-Type': 'image/ico'});
      this.end(fs.readFileSync(path), 'binary');
    } else if (ext == '.css') {
      this.writeHead(200, {'Content-Type': 'text/css'});
      this.end(fs.read(path).supplant(tokens));
    } else if (ext == '.js') {
      this.writeHead(200, {'Content-Type': 'text/javascript'});
      this.end(fs.read(path).supplant(tokens));
    } else // send everything else as text
      this.end(fs.read(path).supplant(tokens));
  } else {
    this.writeHead(200, {'Content-Type': 'text/xml'});
    var proto = require(path + 'proto.js');
    for (var div in proto) {
      this.write(
        fs.read(path + proto[div] + '.html').supplant(tokens));
    }
    this.end();
  }
}

var port = process.env.PORT || 5000;

var tokens = {TITLE: 'Scoreboard: v1.0',
              SCRIPT: '\"/scripts/script.js\"',
              GAME: 'Spades'};

http.createServer(function (request, response) {
//console.log(require('util').inspect(url.parse(request.url)));
  var path = url.parse(request.url).path;
  if (path == '/') path = '/html/';
  response.serve(path);
}).listen(port);

console.log('Server running at http://127.0.0.1:' + port + '/');
