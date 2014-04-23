var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Person = mongoose.model('Person', {
    name: String,
    dateAdded: Date,
    active: Boolean
});

Person.findOne({name: "Mike"}, function (err, data) {
    if (err) return console.error(err);
    console.log('FindOne:');
    console.log(JSON.stringify(data));
    mongoose.disconnect();
});

// Person.find({name: "Mike"}, function (err, data) {
//     if (err) return console.error(err);
//     console.log('Find (all):');

//     // console.log(data);
//     // console.log(JSON.stringify(data, null, ' '));

//     for (var i in data) {
//         console.log(data[i]);
//     }

//     mongoose.disconnect();
// });
