//server.js

//Setup
var express = require('express');
var app = express();
var bodyParder = require('body-parser');
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

//Uses
app.use(bodyParder.urlencoded({extended: true}));
app.use(bodyParder.json());
app.use(express.static(__dirname + '/view'));

//Connecting to database
mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function(){
    console.log('Could not connect to database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function(){
    console.log('Successfully connected to database');
});

//Config
/*app.get('/', function(req, res){
    res.sendfile('./view/index.html')
});*/

require('./app/routes/note.routes.js')(app);

app.listen(8080, function(){
    console.log("Server is listening on port 8080");
});