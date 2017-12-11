var express = require("express");
var app  = express();

app.get('/', function(req, res){
   res.send('Oweather started~!');
});

app.use(express.static('src'));

app.listen(3000, function(){
   console.log("on port 3000~! ^^");
});