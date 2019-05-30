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
        fs.readFile('app/data/friends.js', function (err, data) {
            if (err) {
                return console.log(err);
            } else {
                var friendsScore = res.json(data);
            }
        })
        var addFriend = req.body.scores
     
        });
        var space = 0;
        var spaceArr = [];
        scoreNew = addFriend.scores.val
        for (var i = 0; i < friends.length; i++) {

            for (var n = 0; n < scoreNew.length; n++) {
                space += (Math.abs(parseInt(friends[i].scores[n]) - parseInt(scoreNew[n])));

            }
            spaceArr.push(space);
        }
        for (var s = 0; s < spaceArr.length; s++) {
            if (spaceArr[s] <= scoreArr[best]) {
                best = s;
            }
        }
        var bestFriend = friends[best]
        res.json(bestFriend);

    });
};
  //display best match
//   app.get("/app/friends/:match", function(req, res){
//     var match = req.params.match;
//     console.log(match);
// //????????
//   }
//   });


