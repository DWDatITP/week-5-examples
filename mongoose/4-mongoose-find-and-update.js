var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Person = mongoose.model('Person', {
    name: String,
    dateAdded: Date,
    active: Boolean
});

Person.findOne({name: "Mike"}, function (err, person) {
    if (err) {
        return console.error(err);
    }

    // console.log(person);

    if (person) {
        if (person.active === true) {
            person.active = false;
            person.save();
            console.log('Person updated!');
        } else {
            console.log('Person not currently active. No update made.');
        }
    } else {
        console.log('No records found');
    }

});

