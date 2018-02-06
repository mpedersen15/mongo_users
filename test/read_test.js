const assert = require('assert');
const User = require('../src/user');

describe('Reading users', () => {
    let joe;
    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save().then(() => done());
    });

    it('should find all users with name, Joe', (done) => {
        User.find({name: 'Joe'})
            .then(users => {
                assert(users[0]._id.equals(joe._id));
                done();
            });
    });
});