
var os = require('os');
var ni = os.networkInterfaces();
var ni_2 = Object.keys(ni)[1];
var express = require("express");
var app = express();

var localip = ni['eth0'][0].address;

app.get('/', function(req, res) {
  res.send("Hello " + req.ip + " from " + localip + "\n");
});

app.listen(3000);

