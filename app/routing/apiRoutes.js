var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var htmlRoutes = require("./htmlRoutes.js");
var apiRoutes = require("./apiRoutes.js");

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
    });  
    app.get("/survey", function(req, res) {
        res.json(path.join(__dirname, "public/survey.html"));
        console.log(req.body)
        res.sendFile(path.join(__dirname, "public/survey.html"));
    })   
}};
app.post("/api/friends", function(req, res) {
var newFriend =  {
    "name": $("#name").val().trim(),
    "photo": $("#photo").val().trim(),
    "scores": [
              parseInt( $( "#q0" ).val() ),
              parseInt( $( "#q1" ).val() ),
              parseInt( $( "#q2" ).val() ),
              parseInt( $( "#q3" ).val() ),
              parseInt( $( "#q4" ).val() ),
              parseInt( $( "#q5" ).val() ),
              parseInt( $( "#q6" ).val() ),
              parseInt( $( "#q7" ).val() ),
              parseInt( $( "#q8" ).val() ),
              parseInt( $( "#q9" ).val() )
          ]};
          console.log(newFriend);
          for (var i = 0; i< friends.length; i++){
    fs.readFile('app/data/friends.js', function (err, data) {
        var friendsScore = JSON.parse(data);
    var scoreCompare = [];
    var space = 0;
    for (var i = 0; i< scores.length; i++){
        Math.abs
    }
       friends.push(newFriend);
        
          res.json(newFriend);
        })   
}  
})    
  //display best match
//   app.get("/app/friends/:match", function(req, res){
//     var match = req.params.match;
//     console.log(match);
// //????????
//   }
//   });
  
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });
