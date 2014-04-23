var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

// connect to mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// define a schema
var Person = mongoose.model('Person', {
    name: String,
    dateAdded: Date,
    active: Boolean
});


// get all people
app.get('/', function(req, res) {
  Person.find({}, function (err, data) {
      if (err) return console.error(err);
      res.json(data);
  });
});


// get a person by name
app.get('/:person', function(req, res) {
  Person.findOne({name: req.params.person})
    .sort('-dateAdded')
    .exec(function (err, data) {
      if (err) return console.error(err);
      if (data) {
        res.json(data);
      } else {
        res.send(404);
      }
  });
});


// fire up the server
app.listen(app.get('port'));
console.log('firing up on port %d', app.get('port'));
