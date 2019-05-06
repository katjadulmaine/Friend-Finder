var express = require("express");
var path = require("path");
var app = express();
var htmlRoutes = require("./html-routes.js");
var apiRoutes = require("./api-routes.js")

// load routes into app by passing app into route functions
htmlRoutes(app);
apiRoutes(app);
var app = express();
var PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = {
    function (app){
    app.get("/", function(req, res) {
        console.log(req.body);
           res.sendFile(path.join(__dirname, "/../public/home.html"));
    })  
    app.get("/survey", function(req, res) {
        console.log(req.body)
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })   
}};

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
