var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var friends = require("../data/friends");


module.exports = {
    function(app) {
        app.get("/", function (req, res) {
            res.sendFile(path.join(__dirname, "index"));
            res.json(path.join(__dirname, "index"));
            console.log(req.body);

        })
        app.get("survey", function (req, res) {
            res.sendFile(path.join(__dirname, "survey"));
            res.json(path.join(__dirname, "survey"));
            console.log(req.body)
        })
        app.get("/api/friends", function (req, res) {
            res.sendFile(path.join(__dirname, "survey"));
            res.json(path.join(__dirname, "survey"));
            console.log(req.body)
        })
       
    }
};

app.post("/app/data/friends", function(req, res) {
    fs.readFile('app/data/friends.js', function (err, data) {
        if (err) {
            return console.log(err);
        } else {
           var friendsScore = res.json(data);}
        })
app.get("/api/input", function (err, data){
        // var newFriend =  data.input {
        // "name": $("#name").val().trim(),
        // "photo": $("#photo").val().trim(),
        // "scores": [
        //       parseInt($( "#q0" ).val()),
        //       parseInt($( "#q1" ).val()),
        //       parseInt($( "#q2" ).val()),
        //       parseInt($( "#q3" ).val()),
        //       parseInt($( "#q4" ).val()),
        //       parseInt($( "#q5" ).val()),
        //       parseInt($( "#q6" ).val()),
        //       parseInt($( "#q7" ).val()),
        //       parseInt($( "#q8" ).val()),
        //       parseInt($( "#q9" ).val()),
        //       parseInt($( "#q10" ).val())
        //   ]}; console.log(newFriend);
        });
        var space = 0;
        var spaceArr = [];
        scoreNew = newFriend.scores.val 
            for (var i = 0; i< friends.length; i++){
    
            for (var n = 0; n< scoreNew.length; n++){
         space += (Math.abs(parseInt(friends[i].scores[n]) - parseInt(scoreNew[n])));
             
        }
        spaceArr.push(space); 
    } 
        for(var s=0; s < spaceArr.length; s++){
            if (spaceArr[s] <= scoreArr[best]){
                best = s;
            }
        }
        var bestFriend = friends[best]
          res.json(bestFriend);
           
});    
  //display best match
//   app.get("/app/friends/:match", function(req, res){
//     var match = req.params.match;
//     console.log(match);
// //????????
//   }
//   });
  
    
