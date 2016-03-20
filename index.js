var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('dist'));
app.use(express.static('bower_components'));

app.get('/', function(req, res){
  res.render('index.html');
});


app.listen(port, function(){
  console.log("Application listening on port " + port);
});
