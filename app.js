'use strict';

var 
  express = require('express'),
  app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('25 puzzle app listening on port 3000!');
});