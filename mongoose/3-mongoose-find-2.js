var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Person = mongoose.model('Person', {
    name: String,
    dateAdded: Date,
    active: Boolean
});

console.log('because node is async, this will fire before data returns');
Person.findOne({name: "Mike"}, function (err, data) {
    if (err) return console.error(err);
    console.log('FindOne:');
    console.log(data);
});

console.log('so will this');
Person.find({name: "Mike"}, function (err, data) {
    if (err) return console.error(err);
    console.log('Find (all):');
    console.log(data);
});


