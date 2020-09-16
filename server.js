const circle = require('./public/linked.js');
var express = require('express');
var app = express();

var port = 3001;
app.listen(port);
console.log(port);

app.use(express.static(__dirname + '/public'));

 app.get('/linked',function(req,res){
   var result=circle.ll();
   res.send(result);
 })