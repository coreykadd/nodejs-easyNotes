var express = require('express');
var app = express();
var bodyParder = require('body-parser');

app.use(bodyParder.urlencoded({extended: true}));
app.use(bodyParder.json());

app.get('/', function(req, res){
    res.json({"message": "Welcome to easyNotes!"});
});

app.listen(8080, function(){
    console.log("Server is listening on port 8080");
});