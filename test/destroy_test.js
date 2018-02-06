const assert = require('assert');

const User = require('../src/user');

describe('Destrying Records', () => {

    let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    it('should remove a user with the instance remove method', (done) => {
        joe.remove()
            .then(() =>  User.findOne({name: 'Joe'}))
            .then(user => {
                assert(user === null);
                done();
            });
    });

    it('should remove a user with the class remove method', (done) => {
        User.remove({name: 'Joe'})
            .then(() =>  User.findOne({name: 'Joe'}))
            .then(user => {
                assert(user === null);
                done();
            });
    });

    it('should remove a user with class findAndRemove method', (done) => {
        User.findOneAndRemove({name: 'Joe'})
            .then(() =>  User.findOne({name: 'Joe'}))
            .then(user => {
                assert(user === null);
                done();
            });
    });

    it('should remove a user with the class findByIdAndRemove method', (done) => {
        User.findByIdAndRemove(joe._id)
            .then(() =>  User.findOne({name: 'Joe'}))
            .then(user => {
                assert(user === null);
                done();
            });
    });

});