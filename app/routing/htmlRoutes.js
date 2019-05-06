var express = require("express");
var path = require("path");
var app = express();
var htmlRoutes = require("./htmlRoutes.js");
var apiRoutes = require("./apiRoutes.js")

// load routes into app by passing app into route functions
htmlRoutes(app);
apiRoutes(app);
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = {
    function (app){
        app.get("/", function(req, res) {
            res.json(path.join(__dirname, "public/index.html"));
          
        console.log(req.body);
           res.sendFile(path.join(__dirname, "public/index.html"));
    }) 
    app.get("/survey", function(req, res) {
        res.json(path.join(__dirname, "public/survey.html"));
        console.log(req.body)
        res.sendFile(path.join(__dirname, "public/survey.html"));
    })   
}};

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
