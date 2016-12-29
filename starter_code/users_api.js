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
    //-------------------
    //---- Your Code ----
    //-------------------    
};

// get all users
exercise.getUsers = function  (){
    //-------------------
    //---- Your Code ----
    //-------------------    
};

// get user using user id
exercise.getUserById = function (id){
    //-------------------
    //---- Your Code ----
    //-------------------    
};

// add a new user
exercise.addUser = function  (user){
    //-------------------
    //---- Your Code ----
    //-------------------    
};

// update user
exercise.updateUser = function (id,name){
    //-------------------
    //---- Your Code ----
    //-------------------    
};

// delete user from db
exercise.deleteUser = function (id){
    //-------------------
    //---- Your Code ----
    //-------------------    
};

module.exports = exercise;
