// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
// 2. Create a server
http.createServer(function (req, res) {
  // 3. Write response head
  res.writeHead(200, {'Content-Type': 'text/html'});
  // 4. Set response content
  var data = fs.readFileSync('comments.json', 'utf8');
  var comments = JSON.parse(data);
  var commentsHtml = '';
  for (var i = 0; i < comments.length; i++) {
    commentsHtml += '<p>' + comments[i].name + ': ' + comments[i].comment + '</p>';
  }
  res.end('<html><body>' + commentsHtml + '</body></html>');
}).listen(8080);
console.log('Server running at http://localhost:8080/');
// 5. Keep the server alive
// Infinite loop
while (true) {}
// 6. End
console.log('Server stopped');
// End of file

// Path: comments.js
// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
// 2. Create a server
http.createServer(function (req, res) {
  // 3. Write response head
  res.writeHead(200, {'Content-Type': 'text/html'});
  // 4. Set response content
  var data = fs.readFileSync('comments.json', 'utf8');
  var comments = JSON.parse(data);
  var commentsHtml = '';
  for (var i = 0; i < comments.length; i++) {
    commentsHtml += '<p>' + comments[i].name + ': ' + comments[i].comment + '</p>';
  }
  res.end('<html><body>' + commentsHtml + '</body></html>');
}).listen(8080);
console.log('Server running at http://localhost:8080/');
// 5. Keep the server alive
// Infinite loop
while (true) {}
// 6. End
console.log('Server stopped');
// End of file

// Path: comments.js
// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
// 2. Create a server
http.createServer(function (req, res) {
  // 3. Write response head
  res.writeHead