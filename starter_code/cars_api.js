var low = require('lowdb');
var fs  = require ('fs');
var db  = 'cars.json';
var exercise = {};

// delete data from previous runs
if (fs.existsSync(db)){ fs.unlink(db); }

// init database
var db = low(db);
db.defaults({ cars:[] }).value();
var cars = db.get('cars');

// populate database
exercise.populate = function(items){
    items.forEach(function(item){
        cars.push(item).last().value();
    });
};

//-----------------------------------------
//  cars: create, read, update, delete
//-----------------------------------------
exercise.count = function(){
    return cars.size().value();    
};

// get all cars
exercise.getCars = function(){
    return cars.value();
};

// get car using car id
exercise.getCarById = function(id){
    var car = cars.find({id:id}).value();
    return car; 
};

// add a new car
exercise.addCar = function (car){
    cars.push(car).last().value();
    return exercise.getCars();
};

// update car
exercise.updateCar = function(id,make){
    cars.find({ id: id }).assign({make:make}).value();
    return exercise.getCars();
};

// delete car from db
exercise.deleteCar = function(id){
    cars.remove({ id: id }).value();
    return exercise.getCars();
};

module.exports = exercise;
