var low = require('lowdb');
var fs  = require ('fs');
var db  = 'users.json';
var exercise = {};

// delete data from previous runs
if (fs.existsSync(db)){ fs.unlink(db); }

// init database
var db 	= low(db);
db.defaults({ users:[] }).value();
var users  = db.get('users');

// populate database
exercise.populate = function(items){
    items.forEach(function(item){
        users.push(item).last().value();
    });
};

//-----------------------------------------
//  users: create, read, update, delete
//-----------------------------------------
exercise.count = function(){
    return users.size().value();    
};

// get all users
exercise.getUsers = function  (){
    return users.value();
};

// get user using user id
exercise.getUserById = function (id){
    var user = users.find({email:id}).value();
    return user; 
};

// add a new user
exercise.addUser = function  (user){
    users.push(user).last().value();
    return exercise.getUsers();
};

// update user
exercise.updateUser = function (id,name){
    users.find({email:id}).assign({name:name}).value();
    return exercise.getUsers();
};

// delete user from db
exercise.deleteUser = function (id){
    users.remove({email:id}).value();
    return exercise.getUsers();
};

module.exports = exercise;
