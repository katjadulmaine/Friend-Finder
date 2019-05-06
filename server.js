var express = require("express");
var path = require("path");
var app = express();
var htmlRoutes = require("./public/htmlroutes.js");
var apiRoutes = require("./public/apiroutes.js")

// load routes into app by passing app into route functions
htmlRoutes(app);
apiRoutes(app);
var app = express();
var PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//basic route user sends first to AJAX page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  
 //display all friends
  app.get("/app/data/friends", function(req, res) {
    return res.json(friends);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });