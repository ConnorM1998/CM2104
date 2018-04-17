app.use(express.static('public'));

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hello World! by express")
});

app.get('/test', function(req, res){
  res.send("This is route 2")
});

app.get('/add', function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  res.send("X + Y = " + (x+y));
});

app.get('/getform', function(reg, res){
  var name = req.query.name;
  var quest = req.query.quest;
  res.send("Hi " + name + " i am sure you will " + quest);
});

app.listen(8080);
