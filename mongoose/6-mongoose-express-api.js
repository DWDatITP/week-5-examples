var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded());
app.set('port', process.env.PORT || 3000);

// connect to mongo
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://people:X9bDrVfQB4midTwv@ds049237.mongolab.com:49237/dwd-2014');

// define a schema
var Person = mongoose.model('Person', {
    name: String,
    dateAdded: Date,
    active: Boolean
});


// get all people
app.get('/people', function (req, res) {
  Person.find({}, function (err, data) {
      if (err) return console.error(err);
      res.json(data);
  });
});


// get a person by name
app.get('/people/:person', function (req, res) {
  Person.findOne({name: req.params.person})
    .sort('-dateAdded')
    .exec(function (err, data) {
      if (err) {
        console.error(err);
        res.status(500).json({status: "Error!"});
      } else {
        if (data) {
          res.json(data);
        } else {
          res.send(404);
        }
      }
  });
});


// create a new person
app.post('/person', function (req, res) {
  // console.log(req.body);

  var personData = {
    name : req.body.name,
    dateAdded : Date(),
    active: true
  };

  p = new Person(personData);
  p.save(function (err, person) {
    if (err) {
      console.error(err);
      res.status(500).json({status: "Error!"});
    } else {
      console.log(person);
      res.status(200).json({status:"Success!"});
    }
  });
});

// fire up the server
app.listen(app.get('port'));
console.log('firing up on port %d', app.get('port'));
