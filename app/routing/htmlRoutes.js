var express = require("express");
var path = require("path");
var app = express();


module.exports = {
    function(app) {
        app.get("/", function (req, res) {
            res.sendFile(path.join(__dirname, index));
            res.json(path.join(__dirname, index));
            console.log(req.body);

        })
        app.get("survey", function (req, res) {
            res.sendFile(path.join(__dirname, survey));
            res.json(path.join(__dirname, survey));
            console.log(req.body)
        })
    }
};


