var should = require('chai').should();
var ex     = require('../users_api.js');

// test data
var users = [];
users.push({ 'email' : 'abbie@mit.edu', 'name' : 'abbie smith' });
users.push({ 'email' : 'bobby@mit.edu', 'name' : 'bobby abels' });
users.push({ 'email' : 'carla@mit.edu', 'name' : 'carla amsel' });
users.push({ 'email' : 'debra@mit.edu', 'name' : 'debra colon' });
users.push({ 'email' : 'ginny@mit.edu', 'name' : 'ginny hertz' });
ex.populate(users);

describe('Users Database', function() {
	it('Has length of', function() {
	    ex.count().should.equal(5);
	});
});

describe('Users Database', function() {
	it('getUsers is array', function() {
		ex.getUsers().should.be.an('array');
	});
});

describe('Users Database', function() {
	it('The name of the user is', function() {
		ex.getUserById('carla@mit.edu').name.should.be.equal('carla amsel');
	});
});

describe('Users Database', function() {
	it('Add user', function() {
		ex.addUser({'email':'tara@mit.edu','name':'tara jones'});
	    ex.count().should.equal(6);
	});
});

describe('Users Database', function() {
	it('Update user', function() {
		ex.updateUser('ginny@mit.edu','ginny brown');
	    ex.getUserById('ginny@mit.edu').name.should.be.equal('ginny brown');
	});
});

describe('Users Database', function() {
	it('Delete user', function() {
	    ex.deleteUser('bobby@mit.edu').length.should.be.equal(5);
	});
});

