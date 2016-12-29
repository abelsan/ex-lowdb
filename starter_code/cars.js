var exercise = require('./cars_api.js');

//  populate database
var cars   = [];
cars.push({ 'make' : 'Ford',   'id' : 20 });
cars.push({ 'make' : 'Toyota', 'id' : 21 });
cars.push({ 'make' : 'Honda',  'id' : 22 });
cars.push({ 'make' : 'Mazda',  'id' : 23 });
exercise.populate(cars);

// number of cars
var response = exercise.count();
console.log(response);

// get all cars
var response = exercise.getCars();
console.log(response);

// get car using car id
var response = exercise.getCarById(22);
console.log(response);

// add a new car
var response = exercise.addCar({'make':'nissan','id':24 });
console.log(response);

// update car
var response = exercise.updateCar(20,'isuzu');
console.log(response);

// delete car from db
var response = exercise.deleteCar(21);
console.log(response);