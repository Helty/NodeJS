var fs = require('fs');
var express = require('express');
var http = require('http');

var app = express();

//Подключение к локальному серверу.

app.get('/', function(req, res){
  res.send('This is home');
});

app.get('/news', function(req, res){
  res.send('This is news');
});

app.get('/news/:id', function(req, res) {
  res.send('ID is - ' + req.params.id);
});
app.listen(3000);

/*
var server = http.createServer(function(req, res){
  console.log("URL страницы: " + req.url);
  if(req.url === '/index' || req.url === '/')  {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/about.html').pipe(res);
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }

  var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadShort.pipe(res);

})

server.listen(3000, '127.0.0.1');
console.log("Мы отслеживаем порт 3000");
*/
