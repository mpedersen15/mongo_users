const assert = require('assert');
const User = require('../src/user');

describe('Updating Records', () => {

    let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    function assertName(operation, done) {
        operation
            .then(() => User.find({}))
            .then(users => {
                assert(users.length === 1);
                assert(users[0].name === 'joe');
                done();
            });
    }

    it('should update a user with the instance set and save method', (done) => {
        joe.set({name: 'joe'});
        assertName(joe.save(), done);
    });

    it('should update a user with the instance update method', (done) => {
        assertName(joe.update({ name: 'joe' }), done);
    });

    it('should update a user with the class update method', (done) => {
        assertName(User.update({ name: 'Joe' }, { name: 'joe' }), done);
     });

    it('should update a user with the class findOneAndUpdate method', (done) => {
       assertName(User.findOneAndUpdate({ name: 'Joe' }, { name: 'joe' }), done);
    });

    it('should update a user with class findByIdAndUpdate method', (done) => {
      assertName(User.findByIdAndUpdate(joe._id, { name: 'joe' }), done);
    });

});