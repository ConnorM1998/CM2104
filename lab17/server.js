//server.js
//load things we need
var express = require('express');
var app = express();

//set the view engine on EJS
app.set('view engine', 'ejs');

//use res.render to load up an ejs view file

//index pages
app.get('/', function(req, res){
  res.render('pages/index');
});

//about pages
app.get('/about', function(req, res){
  res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');
