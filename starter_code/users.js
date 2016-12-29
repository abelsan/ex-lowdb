var exercise = require('./users_api.js');

// populate database
var users = [];
users.push({ 'email' : 'peter@mit.edu', 'name' : 'peter parker' });
users.push({ 'email' : 'bruce@mit.edu', 'name' : 'bruce wayne' });
users.push({ 'email' : 'clark@mit.edu', 'name' : 'clark kent' });
users.push({ 'email' : 'barry@mit.edu', 'name' : 'barry allen' });
exercise.populate(users);

// number of users
var response = exercise.count();
console.log(response);

// get all users
var response = exercise.getUsers();
console.log(response);

// get user using user id
var response = exercise.getUserById('peter@mit.edu');
console.log(response);

// add a new user
var response = exercise.addUser({'email':'kara@mit.edu','name':'kara danvers'});
console.log(response);

// update user
var response = exercise.updateUser('peter@mit.edu','peter jackson');
console.log(response);

// delete user from db
var response = exercise.deleteUser('bruce@mit.edu');
console.log(response);