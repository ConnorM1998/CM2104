var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'iAahbawQVn5wQEUju37llcP0j',
  consumer_secret: 'Li6FwwyOwIPGkmSw0WRPANTYzBhmNcUpll0wX5gdEqjBmhCfTl',
  access_token_key: '986353016549920769-M6Iqx6VHeGLHlhRVOYaocEyj6Trgu5o',
  access_token_secret: 'Gyae9gkA8vM6kDw8eXt21YOi97Sdb9f2IbRACE6gsUblM',
});


//
app.use(express.static('public'))

app.get('/', function(req, res){
  //
  var params = {screen_name: 'nodejs'};

  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if(!error){
      //formats the JSON data from twitter
      var output = "";
      for(var t = 0; t < tweets.length; t++){
        output += "<div>";
        output += "<h2>" + tweets[t].user.screen_name + "</h2>";
        output += "<p>" + tweets[t].text + "</p>";
        output += "</div>";
      }
      res.send(output);
    }
  });
//
  res.send("Hello World! by express");
});

app.listen(8080);
