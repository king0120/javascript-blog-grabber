var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('app'));
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.render('index.html');
});


app.listen(port, function(){
  console.log("Application listening on port " + port);
});
