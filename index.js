var fs = require('fs');

var myReadShort = fs.createReadStream(__dirname + '/article.txt');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');


myReadShort.on('data', function(chunk){
  console.log("Новые данные получены:" );
  myWriteShort.write(chunk);
});
