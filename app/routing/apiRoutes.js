var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log(friends)
        res.json(friends);
        console.log(req.body);
    })
    

    app.post("/api/friends", function (req, res) {

        var addFriend = req.body
        console.log(addFriend)
        var spaceBetween = 0;
        var bestScore = 100
        var scoreNew = addFriend.scores
        var nBestFriend
        console.log("scorenew",scoreNew)
        for (var i = 0; i < friends.length; i++) {

            for (var n = 0; n < scoreNew.length; n++) {
                spaceBetween += (Math.abs(parseInt(friends[i].scores[n]) - parseInt(scoreNew[n])));
            }
            if (spaceBetween < bestScore){
 
                bestScore = spaceBetween
                nBestFriend= i
            }
           spaceBetween=0
        }
        // for (var s = 0; s < spaceArr.length; s++) {
        //     if (spaceArr[s] <= scoreName[best]) {
        //         best = s;
        //     }
        // }
        friends.push(addFriend)
        res.json({name:friends[nBestFriend].name,photo:friends[nBestFriend].photo})
    })
};

  //display best match
//   app.get("/app/friends/:match", function(req, res){
//     var match = req.params.match;
//     console.log(match);
// //????????
//   }
//   });


