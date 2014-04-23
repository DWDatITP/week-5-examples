var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Person = mongoose.model('Person', {
    name: String,
    dateAdded: Date,
    active: Boolean
});

var person = new Person({
    name: 'Mike',
    awesome: true,
    dateAdded: Date()
});
person.save(function (err) {
    if (err) {
        // handle errors here
        console.log('Error!');
    }
  console.log('Record saved!');
});

