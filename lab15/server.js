const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/star_wars_quotes";
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

var db;

MongoClient.connect(url, function(err, database){
  if(err) throw err;
  db = database;
  app.listen(8080);
});

//Get all quotes
app.get('/all', function(req, res){
  db.collection('quotes').find().toArray(function(err, result){
    if(err) throw err;

    var output = "<h1>All the Quotes</h1>";

    for(var i = 0; i < result.length; i++){
      output += "<div>"
      output += "<h3>" + result[i].name + "</h3>"
      output += "<p>" + result[i].quote + "</p>"
      output += "</div>"
    }
    res.send(output);
  });
});

//Add quotes
app.post('/quotes', function(req, res){
  db.collection('quotes').save(req.body, function(err, result){
    if(err) throw err;
    console.log("saved to database")
    res.redirect('/')
  })
})

//Filter
app.post('/search', function(req, res){
  db.collection('quotes').find(req.body).toArray(function(err, result){
    if(err) throw err;

    var output = "<h1>All the Quotes</h1>";

    for(var i=0; i<result.length; i++){
      output += "<div>"
      output += "<h3>" + result[i].name + "</h3>"
      output += "<p>" + result[i].quote + "</p>"
      output += "</div>"
    }
    res.send(output);
  });
});

//delete
app.post('/delete', function(req, res){
  db.collection('quotes').deleteOne(req.body, function(err, result){
    if(err) throw err;
    res.redirect('/');
  });
});

//Update
app.post('/update', function(req, res){
  var query = { quote: req.body.quote};
  var newvalues = {$set: {nname: req.body.newname, quote: req.body.newquote} };

  db.collection('quotes').updateOne(query,newvalues, function(err, result){
    if(err) throw err;
    res.redirect('/');
  });
});
