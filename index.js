var fs = require('fs');
var express = require('express');
var http = require('http');

var app = express();

app.set('view engine', 'ejs');

//Подключение к локальному серверу.

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get('/about', function(req, res){
  res.sendFile(__dirname + "/about.html");
});

app.get('/news/:id', function(req, res) {
  var obj = {title: "Новость", id: 4, paragraphs: ['Параграф', 'Обычный текст', 'Числа: 2, 4, 6', 99]}
  res.render('news', {newsId: req.params.id, obj: obj});
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
