const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connection
        .once('open', () => done())
        .on('error', error => console.warn('Warning - ', error));
});


beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
});