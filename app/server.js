
var os = require('os');
var ni = os.networkInterfaces();
var ni_2 = Object.keys(ni)[1];
var express = require("express");
var app = express();

var localip = ni['eth0'][0].address;

app.enable('trust proxy');

app.get('/', function(req, res) {
  var body = JSON.stringify({ method: req.method, url: req.url, headers: req.headers, ip: req.ip, ips: req.ips }, null, 4);
  res.send("Hello v1.0 " + req.ip + " from " + localip + "\n" + body);
});

app.listen(3000);

