var express = require("express");
var path = require("path");
var bodyParser = require('body-parser')
var app = express();
var friends = require("./app/data/friends");

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/app/public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/index.html"));
});
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    
  });
  
  app.get("/app/data/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "friends"));
    return res.json(friends);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });