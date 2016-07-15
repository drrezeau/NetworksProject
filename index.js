var express = require('express');

var app = module.exports = express();

app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.render("webgl/project");
});