var fs = require('fs');

// the test results
var test = fs.readFileSync('test/test.json');
var test = JSON.parse(test);

// the webhook data
var travis = fs.readFileSync('travis.json');
var travis = JSON.parse(travis);

//change the value in the in-memory object
test.travis = travis;

//Serialize as JSON and Write it to a file
fs.writeFileSync('test/integration.json', JSON.stringify(test));