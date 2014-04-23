var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Person = mongoose.model('Person', {
    name: String,
    dateAdded: Date,
    active: Boolean
});


// define us some routes
app.get('/', function(req, res) {
  Person.find({}, function (err, data) {
      if (err) return console.error(err);
      res.json(data);
  });
});


// define us some routes
app.get('/:person', function(req, res) {
  Person.findOne({name: req.params.person}, function (err, data) {
      if (err) return console.error(err);
      res.json(data);
  });
});


app.listen(app.get('port'));
console.log('firing up on port %d', app.get('port'));
