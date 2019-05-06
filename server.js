var express = require("express");
var path = require("path");
var app = express();
var htmlRoutes = require("./htmlRoutes.js");
var apiRoutes = require("./apiToutes.js")

// load routes into app by passing app into route functions
htmlRoutes(app);
apiRoutes(app);
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

  
  app.get("/survey", function(req, res) {
    res.json(path.join(__dirname, "public/survey.html"));
    
  });
  
  app.get("/app/data/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
    return res.json(friends);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });